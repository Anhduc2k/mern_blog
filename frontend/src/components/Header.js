import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
export const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">Blog app</Typography>
        <Box display="flex" marginLeft={"auto"}>
          <Button
            color="warning"
            sx={{ margin: 1, borderRadius: 10 }}
            variant="contained"
          >
            Login
          </Button>
          <Button sx={{ margin: 1, borderRadius: 10 }} variant="contained">
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
