import { Avatar, Badge, Button, IconButton, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

export default function Edit() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleClick = () =>
    navigate("/profile/account", {
      state: {
        name: name,
        family: family,
        phone: phone,
        email: email,
        instagram: instagram,
      },
    });

  return (
    <div>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-center mt-4 text-grey-900 font-bold">
            حساب کاربری
          </h2>

          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            badgeContent={
              <IconButton
                className="bg-white mb-6"
                sx={{ filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.25))" }}
              >
                <CameraAltOutlinedIcon />
              </IconButton>
            }
          >
            <div className=" rounded-full bg-gradient-to-b from-primary-500 to-primary-200 my-6">
              <Avatar className="m-[5px] h-[105px] w-[105px]" alt="profile">
                {/* {data.name?.subString(0, 1)} */}
              </Avatar>
            </div>
          </Badge>
        </div>
        <div>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            label="نام"
            variant="outlined"
            size="small"
            sx={{
              marginBottom: "15px",
              width: "100%",
              color: "grey.800",
            }}
          />
          <TextField
            onChange={(e) => setFamily(e.target.value)}
            value={family}
            label="نام خانوادگی"
            variant="outlined"
            size="small"
            sx={{
              marginBottom: "15px",
              width: "100%",
              color: "grey.800",
            }}
          />
          <TextField
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            label="شماره موبایل"
            variant="outlined"
            size="small"
            sx={{
              marginBottom: "15px",
              width: "100%",
              color: "grey.800",
            }}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label="ایمیل"
            variant="outlined"
            size="small"
            sx={{
              marginBottom: "15px",
              width: "100%",
              color: "grey.800",
            }}
          />
          <TextField
            onChange={(e) => setInstagram(e.target.value)}
            value={instagram}
            label="اینستاگرام"
            variant="outlined"
            size="small"
            sx={{
              marginBottom: "15px",
              width: "100%",
              color: "grey.800",
            }}
          />
          <Button
            className="font-normal text-white w-full mb-[10px] py-2"
            variant="contained"
            /* onSubmit={handleSubmit} */
            onClick={handleClick}
          >
            ذخیره
          </Button>
        </div>
      </div>
    </div>
  );
}
