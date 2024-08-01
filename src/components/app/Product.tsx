import { useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

export default function Product() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
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

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(event.target.checked);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2(event.target.checked);
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked3(event.target.checked);
  };
  const handleClickLike = () => {
    if (liked) setLiked(false);
    else setLiked(true);
  };
  const handleClickBookmark = () => {
    if (bookmark) setBookmark(false);
    else setBookmark(true);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Header />
      <div className="px-5">
        {data
          ?.filter((book: any) => book.id == id)
          .map((book: any) => {
            return (
              <>
                <div className="flex flex-col gap-2 my-6 justify-items-center">
                  <div className="flex gap-4">
                    <img
                      className="w-[149px] h-[192px] "
                      src={book.image}
                      alt="book"
                    />
                    <div className="mr-0.5 grow">
                      <h2 className="text-grey-900 text-sm font-medium tracking-[0.28px]">
                        کتاب {book.name} خاکستری جلد اول Angie Sage
                      </h2>
                      <div>
                        <ul className="mt-6 mb-2 text-grey-600 text-right text-xs font-normal tracking-[0.24px]">
                          <li className="mb-2">نویسنده: الن مورفی</li>
                          <li className="mb-2">ژانر: تاریخی-تخیلی</li>
                          <li className="mb-2">تعداد صفحه: 248</li>
                          <li className="mb-2">شابک: 11</li>
                          <li>ترجمه: دارد</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-row justify-between items-center gap-3 basis-[149px]">
                      <div className="flex justify-center gap-2">
                        <IconButton
                          onClick={handleClickLike}
                          className={"m-0 bg-secondery-50"}
                          aria-label=""
                          size={"small"}
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
                          className={"m-0 bg-primary-50"}
                          aria-label=""
                          size={"small"}
                        >
                          {bookmark ? (
                            <BookmarkIcon
                              fontSize="small"
                              sx={{ color: "primary.200" }}
                            />
                          ) : (
                            <BookmarkBorderIcon
                              fontSize="small"
                              sx={{ color: "primary.200" }}
                            />
                          )}
                        </IconButton>
                      </div>

                      <Rating
                        name="half-rating"
                        size="small"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </div>
                    <div className="flex justify-between grow bg-secondery-50 text-secondery-300 p-2 rounded text-sm font-normal tracking-[0.28px]">
                      <span className="text-sm">قیمت:</span>
                      <span className="text-xs">156,000 تومان</span>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="">
                  <div className="my-6">
                    <div className="flex justify-between mb-6">
                      <div className="flex flex-col items-center">
                        <img
                          className=" w-6 h-6 mb-1"
                          src="/age.svg"
                          alt="age"
                        />
                        <span className="text-[10px] text-grey-600 font-medium tracking-[0.2px]">
                          رده سنی: 18+
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          className=" w-6 h-6 mb-1"
                          src="/releaseHistory.svg"
                          alt="age"
                        />
                        <span className="text-[10px] text-grey-600 font-medium tracking-[0.2px]">
                          تاریخ انتشار: 2022/12/12
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          className=" w-6 h-6 mb-1"
                          src="/language.svg"
                          alt="age"
                        />
                        <span className="text-[10px] text-grey-600 font-medium tracking-[0.2px]">
                          زبان: انگلیسی
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      onClick={handleOpen}
                      className="w-full text-white"
                    >
                      خرید کتاب
                    </Button>
                  </div>

                  {/* modal */}

                  <Modal
                    open={open}
                    /* onClose={handleClose} */
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      className="absolute rounded-lg"
                      sx={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "none",
                        boxShadow: 24,
                        p: 4,
                      }}
                    >
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <div className="flex justify-between">
                          <h3>کتاب {book.name} خاکستری جلد اول</h3>
                          <IconButton onClick={handleClose}>
                            <CloseIcon />
                          </IconButton>
                        </div>
                        <Divider />
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                          <FormGroup>
                            <div className="flex justify-between">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked1}
                                    onChange={handleChange1}
                                  />
                                }
                                label="ترجمه به فارسی"
                              />
                              <div>
                                <span>{book.translate} تومان</span>
                                <AddIcon sx={{ color: "secondery.200" }} />
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked2}
                                    onChange={handleChange2}
                                  />
                                }
                                label="خلاصه کتاب به فارسی"
                              />
                              <div>
                                <span>{book.persianSummery} تومان</span>
                                <AddIcon sx={{ color: "secondery.200" }} />
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked3}
                                    onChange={handleChange3}
                                  />
                                }
                                label="خلاصه کتاب به انگلیسی"
                              />
                              <div>
                                <span>{book.englishSummery} تومان</span>
                                <AddIcon sx={{ color: "secondery.200" }} />
                              </div>
                            </div>
                          </FormGroup>
                        </div>
                        <Divider className="m-6" textAlign="center">
                          <span>
                            مبلغ کل:
                            {(checked1 ? book.translate : 0) +
                              (checked2 ? book.persianSummery : 0) +
                              (checked3 ? book.englishSummery : 0)}
                            تومان
                          </span>
                        </Divider>
                      </Typography>
                      <Button variant="contained" className="w-full text-white">
                        پرداخت
                      </Button>
                    </Box>
                  </Modal>
                </div>
                <div>
                  <Divider
                    textAlign="left"
                    className="text-grey-900 text-xs font-medium tracking-[0.24px]"
                  >
                    توضیحات
                  </Divider>
                  <p className="text-grey-700 text-[10px] text-justify mb-4 tracking-[0.24px]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>

                  <Divider
                    textAlign="left"
                    className="text-grey-900 text-xs font-medium tracking-[0.24px]"
                  >
                    خلاصه کتاب
                  </Divider>

                  <p className="text-grey-700 text-[10px] text-justify pb-5 tracking-[0.2px]">
                    {book.summary}
                  </p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
