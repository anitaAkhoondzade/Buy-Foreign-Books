import { Button, Divider, Rating } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Download() {
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
    <div className="px-4 mb-16">
      <Divider className="mb-6 font-bold text-grey-900" textAlign="left">
        12 اردیبهشت ماه 1403
      </Divider>

      {data?.map((book: any) => {
        return (
          <div
            className="flex rounded-lg p-[10px] mb-4"
            style={{ boxShadow: " 0 2px 4px 0 rgb(0, 0, 0 ,0.25)" }}
          >
            <img
              className="h-[107px] w-[83px] rounded"
              src={book.image}
              alt="book"
            />

            <div className="flex flex-col mr-[10px] grow">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xs font-medium text-grey-900 mb-2">
                    کتاب {book.name} جلد سبز
                  </h2>

                  <div className="text-xs font-normal text-grey-700 mb-4">
                    <p>نویسنده: رابرت وایت</p>
                    <p>قیمت: 120 تومان</p>
                  </div>
                </div>
                <Rating
                  name="half-rating"
                  size="small"
                  defaultValue={2.5}
                  precision={0.5}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  className="bg-primary-200 w-[107px] py-1 px-[10px] text-white"
                  variant="outlined"
                  size="small"
                >
                  مشاهده کتاب
                </Button>
                {book.translation && (
                  <Button
                    className="bg-secondery-200 w-[107px] py-1 px-[10px] text-white"
                    variant="outlined"
                    size="small"
                  >
                    مشاهده ترجمه
                  </Button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
