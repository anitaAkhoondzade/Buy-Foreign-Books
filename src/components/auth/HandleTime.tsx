import Countdown from "react-countdown";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
/* const trueCode = [1,2,3,4,5] */
interface IProps {
  onComplete: () => void;
}

export default function HandleTime({ onComplete }: IProps) {
  const Completionist = () => {
    onComplete();
    return (
      <>
        {/* {setError(true)} */}
        <span className="mx-px text-[10px]">دریافت مجدد کد</span>
      </>
    );
  };

  // Renderer callback with condition{
  const renderer = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: number;
    seconds: number;
    completed: any;
  }) => {
    if (completed) {
      // Render a complete state

      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex items-center">
          <AccessTimeIcon fontSize="small" />
          <span>
            {minutes}:{seconds}
          </span>
          <span className="mx-px text-[10px]"> تا دریافت مجدد کد</span>
        </div>
      );
    }
  };
  return (
    <div className="flex">
      <Countdown date={Date.now() + 5000} renderer={renderer} />
    </div>
  );
}
