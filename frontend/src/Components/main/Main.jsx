import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../redux/Product";
import { motion, spring } from "framer-motion";

export default function Main() {
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyData(newValue);
    }
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsApi = "products?populate=*";
  const menCateogryApi =
    "products?populate=*&filters[productCateogry][$eq]=men";
  const womenCateogryApi =
    "products?populate=*&filters[productCateogry][$eq]=women";
  const [myData, setmyData] = useState(allProductsApi);

  const { data, error, isLoading } = useGetProductByNameQuery(myData);
  const [clickProduct, setclickProduct] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Container>
        <Typography variant="h6">{error.error}</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exculsive brand selection
            </Typography>
          </Box>
          <Box>
            <ToggleButtonGroup
              value={myData}
              exclusive
              onChange={handleAlignment}
              color="error"
              aria-label="text alignment"
              sx={{
                "Mui-selected": {
                  border: "1px solid rgba(233,69,96,.5)",
                  color: "#e94560",
                  backgroundColor: "intial",
                },
              }}
            >
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="my-button"
                value={allProductsApi}
                aria-label="left aligned"
              >
                All products
              </ToggleButton>
              <ToggleButton
                sx={{
                  mx: "16px !important",
                  color: theme.palette.text.primary,
                }}
                className="my-button"
                value={menCateogryApi}
                aria-label="centered"
              >
                MEN category
              </ToggleButton>
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="my-button"
                value={womenCateogryApi}
                aria-label="right aligned"
              >
                WOMEN category
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {data.data.map((item) => {
            return (
              <Card
                component={motion.section}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ duration: 1.2, stiffness:50, type: spring }}
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: ".35s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277, mt: 6 }}
                  image={`${item.attributes.productimg.data[0].attributes.url}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setclickProduct(item);
                    }}
                    size="large"
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: 1, textTransform: "capitalize" }}
                      fontSize="small"
                    />
                    add to cart
                  </Button>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={item.attributes.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: ".3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails clickProduct={clickProduct} />
        </Dialog>
      </Container>
    );
  }
}
