import { useEffect, useState } from "react";
import BookCards from "../BookCards";
import { Divider } from "@mui/material";
import axios from "axios";

export default function History() {
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
    <div className="px-6 mb-14">
      <Divider className="mb-6 font-bold text-grey-900" textAlign="left">
        12 اردیبهشت ماه 1403
      </Divider>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {data?.map((book: any) => (
          <BookCards
            key={book.id}
            id={book.id}
            name={book.name}
            summary={book.summary}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}
