import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { IProduct } from "../interfaces";
import { ProductList } from "../components/products";
import { ShopLayout } from "../components/layout";
import { initialData } from "../database/products";

initialData;

const Home = () => {
  return (
    <>
      <ShopLayout
        title={"Shop - Home"}
        pageDescription={"Encuentra los mejores productos"}
      >
        <Typography variant="h1" component="h1">
          Tienda
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Todos los productos
        </Typography>
        <ProductList products={initialData.products as any} />
      </ShopLayout>
    </>
  );
};
export default Home;
