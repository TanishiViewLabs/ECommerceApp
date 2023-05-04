import PropTypes from "prop-types";
// @mui
import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { fCurrency } from "../../utils/formatNumber";
// components
import Label from "../../Components/label";
import { ColorPreview } from "../../Components/color-utils";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const history = useNavigate();

  const handleClick = (SKU) => {
    history(`/Updateproduct/${SKU}`);
  };
  const {
    name,
    price,
    size,
    category,
    productDetails,
    color,
    audience,
    quantity,
    currFilePath,
    SKU,
  } = product;

  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        <StyledProductImg alt={name} src={""} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link
          color="inherit"
          underline="hover"
          onClick={() => handleClick(SKU)}
        >
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <ColorPreview color={color} />
          <Typography variant="subtitle1">{fCurrency(price)}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
