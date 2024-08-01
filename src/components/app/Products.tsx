import { useEffect, useState } from "react";
import BookCards from "../BookCards";
import { useParams } from "react-router-dom";
import { Pagination, Stack, Typography } from "@mui/material";
import axios from "axios";
import Header from "./Header";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Products() {
  /* const { state } = useLocation(); */
  const { category } = useParams();
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

  /* const navigate = useNavigate()
  const handleClick = () => navigate(`/product/${books.id}`)
 */
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div className="mb-[29px]">
      <Header />
      <div className="flex flex-col mt-[33px]">
        <Typography className="font-semibold text-grey-900">
          {category}
        </Typography>
        <Grid container spacing={2}>
          {data
            ?.filter((book: any) => book.category == category)
            .map((book: any) => (
              <Grid key={book.id} xs={6} sm={4}>
                <BookCards
                  id={book.id}
                  name={book.name}
                  summary={book.summary}
                  image={book.image}
                />
              </Grid>
            ))}
        </Grid>

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
    </div>
  );
}
