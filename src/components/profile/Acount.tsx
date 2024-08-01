import {
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Acount() {
  const { state } = useLocation();

  const [data, setData] = useState<{ name?: string; age?: number }>({});

  useEffect(() => {
    axios
      .get("http://localhost:5173/api/profile.json", { loading: true })
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center">
        <Typography
          component={"h2"}
          className="text-center mt-4 text-grey-900 font-bold"
        >
          حساب کاربری
        </Typography>
        {/* <img className="m-[5px]" src="/Ellipse 1.png" alt="profile" /> */}
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          badgeContent={
            <IconButton
              className="bg-white -mb-[104px]"
              sx={{ filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.25))" }}
            >
              <CameraAltOutlinedIcon />
            </IconButton>
          }
        >
          <div className="rounded-full bg-gradient-to-b from-primary-500 to-primary-200 mt-6 -mb-[61px]">
            <Avatar
              className="m-[5px] h-[105px] w-[105px]"
              alt="profile"
              src="/Ellipse 1.png"
            >
              {data.name?.substring(0, 1)}
            </Avatar>
          </div>
        </Badge>
      </div>
      <div className="flex flex-col gap-y-4 p-4 rounded-lg border border-solid border-primary-50 bg-grey-50">
        <div className="flex justify-between mt-[85px] text-right text-xs">
          <span className="text-grey-900 font-medium">نام:</span>
          <span className="text-grey-800 font-normal">{state?.name}</span>
        </div>
        <Divider />
        <div className="flex justify-between text-right text-xs">
          <span className="text-grey-900 font-medium">نام خانوادگی:</span>
          <span className="text-grey-800 font-normal">{state?.family}</span>
        </div>
        <Divider />
        <div className="flex justify-between text-right text-xs">
          <span className="text-grey-900 font-medium">شماره موبایل:</span>
          <span className="text-grey-800 font-normal">{state?.phone}</span>
        </div>
        <Divider />
        <div className="flex justify-between text-right text-xs">
          <span className="text-grey-900 font-medium">ایمیل:</span>
          <span className="text-grey-800 font-normal">{state?.email}</span>
        </div>
        <Divider />
        <div className="flex justify-between text-right text-xs">
          <span className="text-grey-900 font-medium">اینستاگرام:</span>
          <span className="text-grey-800 font-normal">{state?.instagram}</span>
        </div>
      </div>

      <div className="flex justify-end">
        <Link to={"/profile/edit"}>
          <Button
            variant="contained"
            size="large"
            /* onClick={handleClick} */ style={{
              marginBottom: "10px",
              marginTop: "16px",
              padding: "8px 0",
              width: "103px",
              height: "42px",
            }}
          >
            <EditOutlinedIcon sx={{ color: "white" }} />
            {/*  <img src="/edit.svg" alt="edit" /> */}
            <span className="text-white mr-3 font-normal">ویرایش</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
