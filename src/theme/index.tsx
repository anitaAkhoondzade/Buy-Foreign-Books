import { createTheme } from '@mui/material/styles';
import i18n from "../locale/i18n.ts";
import {Direction} from "@mui/material";
import palette from "./colors.json";

const theme = createTheme({
    direction: i18n.t("_dir") as Direction,
    palette,
    typography: {
        fontFamily: "IRANYekanXFaNum",
        fontSize: 12
    },
});

export default theme;
