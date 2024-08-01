import { Autocomplete, Divider, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CloseIcon from "@mui/icons-material/Close";

import { Swiper, SwiperSlide } from "swiper/react";
import BookCards from "../BookCards";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const [close0, setClose0] = useState(true);
  const [close1, setClose1] = useState(true);
  const [close2, setClose2] = useState(true);

  const [lastSearch, setLastSearch] = useState<string[]>([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5173/api/test.json")
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClose0 = () => setClose0(false);
  const handleClose1 = () => setClose1(false);
  const handleClose2 = () => setClose2(false);

  const handleChangeSearch = (event: any, newValue: any | null) => {
    if (newValue) {
      navigate(`/product/${newValue.id}`);
    }
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data.map((d: any) => {
          return { ...d, label: d.name };
        })}
        className="w-full"
        onChange={handleChangeSearch}
        renderInput={(params) => (
          <TextField
            onChange={(e) => setInput(e.target.value)}
            value={input}
            {...params}
            label="جستجو"
          />
        )}
      />

      <div>
        <h2 className="mt-6 font-medium text-grey-900">جستجو های اخیر</h2>
        <div className="mt-5">
          {lastSearch[2] && close2 && (
            <div className="flex justify-between py-2">
              <div className="flex items-center text-grey-800 font-normal">
                <WatchLaterOutlinedIcon />
                <p className="mr-2">{lastSearch[0]}</p>
              </div>
              <div>
                <IconButton onClick={handleClose2}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          )}

          {lastSearch[1] && close1 && (
            <>
              <Divider />
              <div className="flex justify-between py-2">
                <div className="flex items-center text-grey-800 font-normal">
                  <WatchLaterOutlinedIcon />
                  <p className="mr-2">{lastSearch[1]}</p>
                </div>
                <div>
                  <IconButton onClick={handleClose1}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            </>
          )}
          {lastSearch[0] && close0 && (
            <>
              <Divider />
              <div className="flex  justify-between py-2">
                <div className="flex items-center text-grey-800 font-normal">
                  <WatchLaterOutlinedIcon />
                  <p className="mr-2">{lastSearch[2]}</p>
                </div>
                <div>
                  <IconButton onClick={handleClose0}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mt-10 ">
        <h2 className="text-sm font-medium text-grey-900">
          <span className="text-primary-500 font-bold">پیشنهاد ویژه </span>آبان
          بووک
        </h2>
        <div className=" mt-3">
          <Swiper spaceBetween={10} slidesPerView={2.5}>
            {data?.map((book: any) => (
               <SwiperSlide
                key={book.id}
              >
                <BookCards
                  id={book.id}
                  name={book.name}
                  summary={book.summary}
                  image={book.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
