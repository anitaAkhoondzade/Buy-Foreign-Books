"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    Backdrop,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText, Alert,
    DialogTitle, Snackbar, AlertColor
} from "@mui/material";
import { redirect } from "react-router-dom";


declare module "axios" {
    export interface AxiosRequestConfig {
        loading?: boolean;
        customUrl?: string;
        errorButtons?: IButtons;
    }
}

interface ISnackbar {
    type?: AlertColor;
    message?: string;
}

interface IButton {
    name: string;
    action?: () => void;
}

interface IButtons {
    ok?: IButton;
    cancel?: IButton;
}

interface IError {
    code?: number;
    message?: string;
}

export default function Axios() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<IError>({});
    const [btn, setBtn] = useState<IButtons>({});
    const [snackbar, setSnackbar] = useState<ISnackbar>({});
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleCloseDialog = () => {
        setError({})
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    useEffect(() => {
        axios.defaults.baseURL = import.meta.env.BASE_URL
        if (typeof window !== 'undefined' && localStorage.getItem('token')) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        }
        axios.interceptors.request.use(request => {
            if (request.loading) {
                setLoading(true);
            }
            if (request.customUrl) {
                request.baseURL = request.customUrl
            }
            return request;
        })
        axios.interceptors.response.use(response => {
            setLoading(false);
            if (response.data.snackbar) {
                setSnackbarOpen(true);
                setSnackbar(response.data.snackbar);
            }
            if (!response.data.status && !response.data.snackbar) {
                if (response.config.errorButtons) setBtn(response.config.errorButtons);
                if (response.data.error) setError(response.data.error);
            }
            return response;
        }, async error => {
            if (!error.response) {
                setError({
                    code: 10600,
                    message: "دسترسی به سرور مقدور نمی باشد. لطفا اینترنت خود را بررسی و دوباره تلاش کنید.",
                });
                setBtn({
                    ok: {
                        name: "تلاش مجدد",
                        action: async () => {
                            try {
                                return await axios.request(error.config);
                            } catch (e) {
                                return null;
                            }
                        }
                    },
                    cancel: {
                        name: "بستن",
                        action: handleCloseDialog
                    }
                });
            } else if (error.response.status === 401) {
                if (typeof window !== 'undefined') localStorage.removeItem('token') ;
                axios.defaults.headers.common['Authorization'] = '';
                redirect('/auth/');
            } else {
                setError({
                    code: error.response.status ? error.response.status : +`10${error.response.status}`,
                    message: error.response?.data?.snackbar?.message ? error.response?.data?.snackbar?.message : "خطای ناشناخته",
                });
                setBtn({
                    ok: {
                        name: "باشه",
                        action: handleCloseDialog
                    },
                });
            }
            setLoading(false);
            return Promise.reject(error);
        });
    }, [])
    return (
        <>
            <Dialog open={error && Object.keys(error).length > 0} onClose={handleCloseDialog}>
                <DialogTitle>خطای کد {error.code}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {error.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {
                        btn && btn.cancel &&
                        <Button onClick={handleCloseDialog}>{btn.cancel.name}</Button>
                    }
                    {
                        btn && btn.ok &&
                        <Button onClick={() => {
                            handleCloseDialog();
                            if (btn && btn.ok && btn.ok.action) {
                                btn.ok.action();
                            }
                        }}>{btn.ok.name}</Button>
                    }
                </DialogActions>
            </Dialog>
            <Backdrop style={{ zIndex: 1400 }} open={loading}>
                <CircularProgress color='primary' />
            </Backdrop>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackbarOpen} onClose={handleSnackbarClose}
                autoHideDuration={6000}>
                <Alert onClose={handleSnackbarClose} severity={snackbar.type}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
}
