import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ScheduleTwoToneIcon from "@mui/icons-material/ScheduleTwoTone";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Link, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Navbar() {
  const [value, setValue] = useState("/");

  const navigate = useNavigate();
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
    navigate(newValue /* , {state: {phone: "9104964383"} } */);
  };
  return (
    <BottomNavigation showLabels value={value} onChange={handleChange}>
      {/* <Link to="/" state={{phone: "9104964383"}} /> */}
      <BottomNavigationAction
        value="/"
        label="خانه"
        icon={<HomeOutlinedIcon className="" />}
        /* bg-clip-text text-transparent  bg-gradient-to-b from-primary-500 to-secondery-200*/
      />
      <BottomNavigationAction
        value="/history"
        label="تاریخچه"
        icon={<WatchLaterOutlinedIcon />}
      />
      <BottomNavigationAction
        value="/download"
        label="دانلود"
        icon={<FileDownloadOutlinedIcon />}
      />
      <BottomNavigationAction
        value="/search"
        label="جستجو"
        icon={
          <SearchOutlinedIcon /* className="bg-clip-text bg-gradient-to-b from-primary-500 to-secondery-200 " sx={{color: "transparent"}} */
          />
        }
      />
    </BottomNavigation>
  );
}
