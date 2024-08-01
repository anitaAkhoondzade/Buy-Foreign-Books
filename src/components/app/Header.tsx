import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Header() {
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);

  return (
    <div>
      <div className="h-[63px] bg-primary-200 flex items-center">
        <Button className="text-white text-sm" onClick={handleBackClick}>
          <ArrowForwardIosIcon />
          بازگشت
        </Button>
      </div>
    </div>
  );
}
