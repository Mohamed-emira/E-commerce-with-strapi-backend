import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#283445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by <Button
        sx={{
          mx:.5,
          fontSize:"18px",
          color:'#ff7790'
        }}
        variant="text"
        color="primary"
        
        >
          Mohamed Hassan
          </Button> @2023
      </Typography>
    </Box>
  );
}
