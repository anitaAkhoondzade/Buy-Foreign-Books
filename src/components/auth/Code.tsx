import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import HandleTime from "./HandleTime";

export default function Code() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");
  const [input, setInput] = useState(true);

  const handleClick = () => {
    if (otp === "12345") {
      navigate("/");
    } else {
      setError(true);
      setInput(false);
    }
  };

  const handleComplete = () => {
    setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [otp]);

  return (
    <div className="flex flex-col">
      <p className="text-grey-600 text-sm font-normal mb-6">
        رمز عبور یکبار مصرف به شماره
        <span className="text-primary-500">{state?.phone}</span> پیامک شد.
      </p>

      <div className="w-[328px]">
        <div className="flex justify-center mt-4">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            inputType={"tel"}
            inputStyle={{ width: "56px", height: "17px", margin: "0 5px" }}
            renderSeparator={<span> </span>}
            renderInput={(props) => (
              <TextField
                error={error}
                size="small"
                {...props}
                className={`h-[36px] ${otp === "12345" ? "bg-primary-50" : ""}`}
              />
            )}
          />
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex text-xs text-grey-500">
            {!input ? (
              <span className="text-red-600 text-[10px]">
                کد وارد شده اشتباه است
              </span>
            ) : (
              <HandleTime onComplete={handleComplete} />
            )}
          </div>

          <Link className="text-primary-500 text-[10px]" to={"/auth"}>
            تغییر شماره موبایل
          </Link>
        </div>

        <Button
          variant="contained"
          onClick={handleClick}
          className="w-full mt-[30px] py-2"
        >
          <span className="text-white">ورود</span>
        </Button>
      </div>
    </div>
  );
}
