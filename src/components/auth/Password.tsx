import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Password() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <p className="my-10 text-grey-700 text-sm">
        <b className="text-grey-900">رمز عبور </b> خود را وارد کنید.
      </p>
      <div className="flex flex-col w-[328px]">
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="رمز عبور"
          variant="outlined"
          type="password"
          placeholder="مثال: ******"
          size="small"
          error={error}
          helperText={error ? "رمز عبور اشتباه است." : undefined}
          style={{ marginBottom: "40px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          className="text-white mb-[10px] py-2"
          onClick={handleClick}
          variant="contained"
        >
          ورود
        </Button>
        <div>
          <Link className="text-primary-500 text-xs text-left" to={"/auth"}>
            تغییر شماره موبایل
          </Link>
        </div>
      </div>
    </div>
  );
}
