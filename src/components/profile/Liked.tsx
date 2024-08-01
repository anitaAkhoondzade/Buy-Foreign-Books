import axios from "axios";
import BookCards from "../BookCards";
import { useEffect, useState } from "react";

export default function Liked() {


  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5174/api/test.json")
      .then(data => {
        setData(data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
       
        
        <h2 className="text-center mt-4 text-grey-900 font-bold">علاقه مندی ها</h2>
        <div className="grid grid-cols-2 gap-4 justify-items-center">

        {
          data?.filter((book:any) => book.like).map((book: any) => <BookCards key={book.id} id={book.id} name={book.name} summary={book.summary} image={book.image} />)
        }

      </div>
    </div>
  )
}

