import { Box, Typography, InputBase, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../themes";

export const AppBarContainer = styled("div")(() => ({
  backgroundColor: colors.primary,
}));

export const AppbarHeader = styled(Typography)(({ theme }) => ({
  padding: "4px",
  fontSize: "2em",
  color: "white",
  letterSpacing: "4px",
  fontFamily: "Roboto",
  [theme.breakpoints.down("md")]: {
    flexGrow: 1,
  },
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: colors.primary,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "rgba(142, 202, 230, 0.25)",
  "&:hover": {
    backgroundColor: "rgba(142, 202, 230, 0.35)",
  },
  minWidth: "30%",

  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
