import { useEffect, useState } from "react";
import BookCards from "../BookCards";
import Header from "./Header";
import { Stack, Pagination } from "@mui/material";
import axios from "axios";

export default function ResultSearch() {
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

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <>
      <Header />
      <div>
        <h2 className="mb-3 mt-11 text-grey-900 text-sm font-medium">
          نتایج جستجو
        </h2>
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {
            data?.map((book: any) => (
              <BookCards
                key={book.id}
                id={book.id}
                name={book.name}
                summary={book.summary}
                image={book.image}
              />
            ))

            
          }
        </div>
        <div className="flex flex-col items-center w-full mt-[30px] mb-[39px]">
          <Stack spacing={2}>
            <Pagination
              color="primary"
              /* variant="outlined" */
              count={7}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
    </>
  );
}
