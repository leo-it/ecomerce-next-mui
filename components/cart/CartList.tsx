import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";

import { ItemCounter } from "../ui";
import Link from "next/link";
import React from "react";
import { initialData } from "../../database/products";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartList = () => {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid key={product.slug} container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <Link href={"/product/slug"}>
              <CardActionArea>
                <CardMedia
                  image={`products/${product.images[0]}`}
                  component="img"
                  sx={{ borderRadius: "5px" }}
                />
              </CardActionArea>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column">
                <Typography variant='body1'>{product.title}</Typography>
                <Typography variant='body1'>Talla:<strong>M</strong></Typography>
                <ItemCounter/>
            </Box>
          </Grid>
          <Grid item xs={2} display="flex" flexDirection="column" alignItems='center'>
            <Typography>
                {`$${product.price}`}
            </Typography>
            <Button variant="text" color="secondary">Remover</Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
