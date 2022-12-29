import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";

import { CartList } from "../../components/cart";
import React from "react";
import { ShopLayout } from "../../components/layout";

const CartPage = () => {
  return (
    <ShopLayout
      title={"Carrito - 3"}
      pageDescription={"Carrito de compras de la tienda"}
    >
      <Grid container>
        <Grid item xs={12} sm={7}>
            <CartList/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
