import { Box, Typography } from "@mui/material";
import {
  RemoveShoppingCart,
  RemoveShoppingCartOutlined,
} from "@mui/icons-material";

import Link from "next/link";
import React from "react";
import { ShopLayout } from "../../components/layout";

const EmptyPage = () => {
  return (
    <ShopLayout
      title={"Carrito vacio"}
      pageDescription={"No hay articulos en el carrito"}
    >
      <Box
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Su carrito esta vacio</Typography>
          <Link href="/">
            <Typography variant="h4" color="secondary">
              Regresar
            </Typography>
          </Link>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
