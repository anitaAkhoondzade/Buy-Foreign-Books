import { Link, Outlet } from "react-router-dom";
import Navbar from "../app/Navbar";
import { IconButton, Popover, Typography } from "@mui/material";
import { useState } from "react";
import HambergerIcon from "../../assets/HambergerIcon";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function MainContainer() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="flex flex-col h-full">
      <nav
        className="bg-white h-[40px] flex justify-between items-center px-1 fixed top-0 z-[2] w-full m-auto min-w-[360px] max-w-[600px]"
        style={{ boxShadow: "0px -1px 4px 0px rgba(0, 0, 0, 0.16)" }}
      >
        <IconButton
          aria-describedby={id}
          sx={{ backgroundColor: "primary.main" }}
          size="small"
          onClick={handleClick}
        >
          <HambergerIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Typography sx={{ p: 2 }}>
            <ul className="flex flex-col justify-center items-start font-normal text-grey-900">
              <li className="pr-0">
                <Link className="flex m-2" to={"/profile"}>
                  <PersonOutlineOutlinedIcon sx={{ color: "#95bccc" }} />

                  <span className="mr-2">پروفایل</span>
                </Link>
              </li>
              <li className="pr-0">
                <Link className="flex m-2" to={"/buy"}>
                  <ShoppingCartOutlinedIcon sx={{ color: "#95bccc" }} />

                  <span className="mr-2">سبد خرید</span>
                </Link>
              </li>
              <li className="pr-0">
                <Link
                  className="flex m-2"
                  to={"/auth"}
                  onClick={() => localStorage.setItem("token", "")}
                >
                  <LogoutOutlinedIcon sx={{ color: "#95bccc" }} />

                  <span className="mr-2">خروج از حساب</span>
                </Link>
              </li>
            </ul>
          </Typography>
        </Popover>

        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondery-200 text-2xl font-normal not-italic text-right">
          Aban Book
        </h1>
      </nav>

      <div className="grow mt-14">
        <Outlet />
      </div>
      <div
        className="fixed bottom-0 z-[1] min-w-[360px] max-w-[600px] w-full m-auto "
        style={{ boxShadow: "0px -1px 4px 0px rgba(0, 0, 0, 0.16)" }}
      >
        <Navbar />
      </div>
    </div>
  );
}
/* fixed bottom-0 z-[1] w-full m-auto */
