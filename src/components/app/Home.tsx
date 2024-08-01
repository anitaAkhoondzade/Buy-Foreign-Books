import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCards from "../BookCards";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";

export default function Home() {
  /* const {state} = useLocation();
  console.log(state?.phone) */

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
    <div className="h-full grow">
      <div className="flex justify-between text-base leading-6">
        <h2 className=" text-base leading-6 font-semibold text-grey-900">
          جدید ترین ها
        </h2>
        <p className=" text-xs text-grey-500 font-normal">
          <Link to={"/products/جدیدترین"} /* state={{title: "جدید ترین ها"}} */>
            مشاهده بیشتر
          </Link>
        </p>
      </div>
      <div className="my-6">
        <Swiper spaceBetween={16} slidesPerView={2.5}>
          {data
            ?.filter((book: any) => book.category === "جدیدترین")
            .map((book: any) => (
              <SwiperSlide key={book.id}>
                <BookCards
                  like={book.like}
                  id={book.id}
                  name={book.name}
                  summary={book.summary}
                  image={book.image}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="flex justify-between">
        <h2 className=" text-base leading-6 font-semibold text-grey-900">
          کتاب تاریخی
        </h2>
        <p className=" text-xs text-grey-500 font-normal">
          <Link
            to={
              "/products/کتاب تاریخی"
            } /* state={{title: "کتاب تاریخی", id: 3}} */
          >
            مشاهده بیشتر
          </Link>
        </p>
      </div>
      <div className="my-6">
        <Swiper spaceBetween={16} slidesPerView={2.5}>
          {data
            ?.filter((book: any) => book.category === "کتاب تاریخی")
            .map((book: any) => (
              <SwiperSlide key={book.id}>
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
      <div className="flex justify-between text-base leading-6 font-semibold text-grey-900">
        <h2 className=" text-base leading-6">رمان</h2>
        <p className=" text-xs text-grey-500 font-normal">
          <Link to={"/products/رمان"}>مشاهده بیشتر</Link>
        </p>
      </div>
      <div className="my-6">
        <Swiper spaceBetween={16} slidesPerView={2.5}>
          {data
            ?.filter((book: any) => book.category === "رمان")
            .map((book: any) => (
              <SwiperSlide key={book.id}>
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
      <div className="flex justify-between text-base leading-6">
        <h2 className=" text-base leading-6 font-semibold text-grey-900">
          داستان های کوتاه
        </h2>
        <p className=" text-xs text-grey-500 font-normal">
          <Link to={"/products/داستان کوتاه"}>مشاهده بیشتر</Link>
        </p>
      </div>
      <div className="my-6 mb-14">
        <Swiper spaceBetween={16} slidesPerView={2.5}>
          {data
            ?.filter((book: any) => book.category === "داستان کوتاه")
            .map((book: any) => (
              <SwiperSlide key={book.id}>
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
  );
}
