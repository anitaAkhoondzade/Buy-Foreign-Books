import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BookCards(props: any) {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [shop, setShop] = useState(false);
  const handleClickLike = () => {
    if (liked) setLiked(false);
    else setLiked(true);
  };
  const handleClickBookmark = () => {
    if (bookmark) setBookmark(false);
    else setBookmark(true);
  };
  const handleClickShop = () => {
    if (shop) setShop(false);
    else setShop(true);
  };
  /* const navigate = useNavigate()
  const handleClick = () => navigate(`/product/${props.id}`) */
  return (
    <div>
      <Card className="rounded-b-lg mb-6 max-w-52 mx-auto w-full">
        <CardActionArea>
          <Link to={`/product/${props.id}`}>
            <CardMedia
              component="img"
              height="140"
              className="w-full -mb-6"
              image={props.image}
              alt="green iguana"
            />
            <CardContent className="backdrop-blur-[2px] text-grey-900 bg-white bg-opacity-60 p-2 ">
              <Typography variant="body2" color="text.secondary">
                {props.summary.substring(0, 50)}....
              </Typography>
            </CardContent>
          </Link>
          <CardActions className="pt-0" disableSpacing>
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-[10px] items-center">
                <IconButton
                  onClick={handleClickShop}
                  className={"bg-primary-50"}
                  aria-label=""
                  size="small"
                >
                  {shop ? (
                    <ShoppingCartIcon
                      fontSize="small"
                      sx={{ color: "primary.500" }}
                    />
                  ) : (
                    <ShoppingCartOutlinedIcon
                      fontSize="small"
                      sx={{ color: "primary.500" }}
                    />
                  )}
                </IconButton>
                <IconButton
                  onClick={handleClickLike}
                  className={"bg-secondery-50"}
                  aria-label=""
                  size="small"
                >
                  {liked ? (
                    <FavoriteIcon
                      fontSize="small"
                      sx={{ color: "secondery.200" }}
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon
                      fontSize="small"
                      sx={{ color: "secondery.200" }}
                    />
                  )}
                </IconButton>
                <IconButton
                  onClick={handleClickBookmark}
                  className={"bg-secondery-50"}
                  aria-label=""
                  size="small"
                >
                  {bookmark ? (
                    <BookmarkIcon
                      fontSize="small"
                      sx={{ color: "secondery.200" }}
                    />
                  ) : (
                    <BookmarkBorderIcon
                      fontSize="small"
                      sx={{ color: "secondery.200" }}
                    />
                  )}
                </IconButton>
              </div>

              <div className="flex justify-center items-center">
                <span className="text-grey-600 text-[10px] font-normal">
                  4.3
                </span>
                <StarBorderIcon fontSize="small" sx={{ color: "grey.600" }} />
              </div>
            </div>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}
