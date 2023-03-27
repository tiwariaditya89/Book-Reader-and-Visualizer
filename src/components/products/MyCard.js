import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({items}) {
  return (
    <Card
      sx={{
        padding: "1rem",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: "1rem" }}
          component='img'
          height='300'
          image={require("../../static/images/images/contemplative-reptile.jpg")}
          alt='green iguana'
        />
      </CardActionArea>
    </Card>
  );
}
