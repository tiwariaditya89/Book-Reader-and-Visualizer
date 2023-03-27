import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import { AppBarContainer, AppbarHeader } from "../../styles/AppBar";
import Actions from "./action";

export default function AppbarMobile({ matches }) {
  return (
    <AppBarContainer>
      <Toolbar>
        <IconButton>
          <MenuIcon style={{color: 'white'}} />
        </IconButton>
        <AppbarHeader textAlign={"center"} variant="h4">
        Tripund
      </AppbarHeader>
      <IconButton>
          <SearchIcon style={{color: 'white'}} />
        </IconButton>
        <Actions matches={matches} />
      </Toolbar>
    </AppBarContainer>
  );
}
