import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Badge, SearchOutlined } from "@mui/icons-material";

import Link from "next/link";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link href={"/"}>
          <Box display={"flex"} alignItems="center">
            <Typography variant="h6">Tienda |</Typography>
            <Typography variant="h6" sx={{ ml: 0.5 }}>
              Shop |
            </Typography>
          </Box>
        </Link>
        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link href={"/category/men"}>
            <Button>Hombres</Button>
          </Link>
          <Link href={"/category/women"}>
            <Button>Mujeres</Button>
          </Link>
          <Link href={"/category/kid"}>
            <Button>Niños</Button>
          </Link>
        </Box>

        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <Link href="/cart">
          <IconButton>
            <Badge color="secondary">{/* <ShopingCarOutlined /> */}</Badge>
          </IconButton>
        </Link>
        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
