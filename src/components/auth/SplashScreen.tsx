import { Fab } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
/* import { useNavigate } from "react-router-dom";
 */
/* const navigate = useNavigate(); */

/* const handleClick = () => {
  navigate("/auth");
}; */

export default function SplashScreen() {
  return (
    <div className="min-w-[360px] max-w-[600px] mx-auto h-full flex flex-col justify-center align-center px-4 relative">
      <div className="h-full">
        <h1 className="text-center mb-10 text-primary-200 text-[24px] font-bold">
          دانلود کتاب <span className="text-secondery-100">خارجی</span>
        </h1>
        <div className="flex flex-col">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondery-100 text-center text-[32px] font-bold mb-2">
            آبان بووک
          </h2>
          <p className="text-justify text-sm font-normal text-grey-900">
            یک وب اپلیکیشن ایرانی دانلود کتاب خارجی است که بیش از 5 میلیون کتاب
            شامل خرید کتاب های آمازون و گوگل پلی را با قیمت پایین تر از این
            فروشگاه های کتاب به فروش می رساند.
          </p>
        </div>
      </div>
      <Fab
        color="secondary"
        aria-label="add"
        className="absolute buttom-8 right-4"
        /* onClick={handleClick} */
      >
        <ArrowForwardIosIcon />
      </Fab>
    </div>
  );
}
