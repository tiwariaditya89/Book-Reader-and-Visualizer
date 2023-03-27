import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../themes";

export const ProductContianer = styled("div")(() => ({
  // display: "flex",
  // flexDirection: "column",
  backgroundColor: "white",
}));

export const ProductHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
}));

export const ProductTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontFamily: "Roboto",
  fontWeight: "bolder",
  letterSpacing: "1px",
  color: colors.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

export const ButtonNavBar = styled("div")(() => ({}));

export const SliderContainer = styled("div")(() => ({
  padding: "30px",
}));
