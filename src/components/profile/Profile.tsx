import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function Profile() {
  return (
    <div>
      <div className="flex flex-col items-center my-6">
        <h2 className="text-center mb-8 font-bold text-grey-900">پروفایل</h2>
        <div className="rounded-full bg-gradient-to-b from-primary-500 to-primary-200">
          <Avatar
            className="m-[5px] h-[105px] w-[105px]"
            alt="profile"
            src="/Ellipse 1.png"
          >
            {/* {data.name?.subString(0, 1)} */}P
          </Avatar>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <Link className="w-full" to={"account"}>
          <div className="rounded-lg bg-gradient-to-r from-primary-200 to-secondery-100 p-px mb-[18px]">
            <Button
              style={{
                width: "100%",
                background: "#F9F9F9",
                borderRadius: "8px",

                display: "flex",
                justifyContent: "right",
                paddingRight: "10px",
              }}
            >
              <PersonOutlineOutlinedIcon />

              <span className="ps-3 text-xs  text-grey-900 py-[11px] font-medium">
                حساب کاربری
              </span>
            </Button>
          </div>
        </Link>

        <Link className="w-full" to={"bookmark"}>
          <div className="rounded-lg bg-gradient-to-r from-primary-200 to-secondery-100 p-px mb-[18px]">
            <Button
              style={{
                width: "100%",
                background: "#F9F9F9",
                borderRadius: "8px",

                display: "flex",
                justifyContent: "right",
                paddingRight: "10px",
              }}
            >
              <BookmarkBorderIcon />

              <span className="ps-3 text-right text-xs text-grey-900 py-[11px] font-medium ">
                نشان شده ها
              </span>
            </Button>
          </div>
        </Link>

        <Link className="w-full" to={"liked"}>
          <div className="rounded-lg bg-gradient-to-r from-primary-200 to-secondery-100 p-px mb-[18px]">
            <Button
              style={{
                width: "100%",
                background: "#F9F9F9",
                borderRadius: "8px",

                display: "flex",
                justifyContent: "right",
                paddingRight: "10px",
              }}
            >
              <FavoriteBorderOutlinedIcon />

              <span className="ps-3 text-xs text-grey-900 py-[11px] font-medium">
                علاقه مندی ها
              </span>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
