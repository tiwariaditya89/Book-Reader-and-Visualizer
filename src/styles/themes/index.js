import { createTheme } from "@mui/material"
export const colors ={
    primary:"#023047",
    secondary:"#219EBC",
    sucess:"#8ECAE6",
    info:"#FFB703",
    danger:"#FB8500",
    // Solid colors
    white:"#ffffff",
    black:"#000000"
}

const theme = createTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
    },
  
    components:{
      MuiButton:{
          defaultProps:{
              disableRipple: true,
              disableElevation: true
          }
      }
    }
  });




export default theme;
