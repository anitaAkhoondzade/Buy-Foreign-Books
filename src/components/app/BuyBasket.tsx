import { Button, Divider } from "@mui/material";
import Header from "./Header";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BuyBasket() {
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

  return (
    <>
      <Header />
      <div className="flex flex-col mx-4">
        <h2 className="text-center mt-4 text-grey-900 font-bold">سبد خرید</h2>

        {data
          ?.filter((book: any) => book.buybasket)
          .map((book: any) => {
            return (
              <div
                className="flex rounded-lg p-[10px] mt-4"
                style={{ boxShadow: " 0 2px 4px 0 rgb(0, 0, 0 ,0.25)" }}
              >
                <img
                  className="h-[107px] w-[83px] rounded"
                  src={book.image}
                  alt="book"
                />

                <div className="flex flex-col mr-[10px]">
                  <div>
                    <div className="text-xs font-normal text-grey-900 mb-4">
                      {book.summary.substring(0, 100)}....
                    </div>

                    <Divider />
                    <div className="text-grey-800 text-[10px] font-normal">
                      <div className="flex justify-between">
                        <span>ترجمه فارسی</span>
                        <div>
                          <span>45,000 تومان</span>
                          <AddIcon sx={{ color: "secondery.200" }} />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>خلاصه به فارسی</span>
                        <div>
                          <span>35,000 تومان</span>
                          <AddIcon sx={{ color: "secondery.200" }} />
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 bg-secondery-50 p-2">
                        <span>قیمت کل</span>
                        <div>
                          <span>354,000 تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <Button variant="contained" className="text-white mt-6 font-normal">
          پرداخت
        </Button>
      </div>
    </>
  );
}
