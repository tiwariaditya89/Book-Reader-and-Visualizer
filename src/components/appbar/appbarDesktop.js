import { Avatar, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import {
  AppBarContainer,
  AppbarHeader,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/AppBar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { colors } from "../../styles/themes";

export default function AppBarDesktop({ matches }) {
  return (
    <AppBarContainer>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <AppbarHeader>Tripund</AppbarHeader>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for books…"
            inputProps={{ "aria-label": "search" }}
            fullWidth
          />
        </Search>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton size="large">
            <Badge variant="dot" color="secondary">
              <NotificationsIcon sx={{ color: colors.white }} />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
          >
            <Avatar
              alt="Remy"
              src={require("../../static/images/avatar/1.png")}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBarContainer>
  );
}
