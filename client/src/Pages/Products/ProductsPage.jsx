import { Helmet, HelmetProvider } from "react-helmet-async";
// @mui
import { Container, Grid, Stack, Typography } from "@mui/material";
// components
import { ProductSort, ProductList } from "../../Section/products";
// mock
// import PRODUCTS from "../../_mock/products";
import axios from "axios";
import { useEffect, useState } from "react";
import ShopProductCard from "../../Section/products/ProductCard";

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:8000/adminProducts");
    setProducts(result.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title> Products </title>
        </Helmet>
      </HelmetProvider>

      <Container>
        <Typography variant="h4" sx={{ mt: 3 }}>
          Products
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 3 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 0 }}>
            <ProductSort />
          </Stack>
        </Stack>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <ShopProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
