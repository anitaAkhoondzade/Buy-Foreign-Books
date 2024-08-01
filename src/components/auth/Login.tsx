import { Button, TextField, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    if (phone) {
      if (phone.length == 11) {
        navigate("/auth/code", { state: { phone: phone } });
        localStorage.setItem("token", phone);
      } else setError(true);
    } else setError(true);
  };

  /* useEffect(() => {
    if (!localStorage.getItem("token")) {
      if (localStorage.getItem("token") != phone) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, []); */

  const handleChangePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const handleChangePhoneWithButton = () => {
    setPhone("09104964383");
  };
  useEffect(() => {
    setError(false);
  }, [phone]);
  return (
    <div>
      <p className="text-grey-700 text-sm font-normal mb-10">
        برای <span className="text-grey-900 font-bold">ورود </span>به آبان بووک
        شماره تلفن خود را وارد کنید.
      </p>

      <div className="flex flex-col w-[328px]">
        <Button onClick={handleChangePhoneWithButton}>test</Button>
        <TextField
          error={error}
          helperText={error ? "شماره موبایل وارد شده اشتباه است." : undefined}
          onChange={handleChangePhone}
          value={phone}
          label="شماره موبایل"
          variant="outlined"
          placeholder="مثال: 09151112345"
          size="small"
          style={{
            marginBottom: "15px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          className="text-white mb-[10px] py-2"
          variant="contained"
          onClick={handleClick}
        >
          ورود
        </Button>
        <Link className="text-grey-600 text-xs" to={"password"}>
          ورورد با رمز عبور یکبار مصرف
        </Link>
      </div>
    </div>
  );
}
