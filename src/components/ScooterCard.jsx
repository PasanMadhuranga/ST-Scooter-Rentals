import { Card, CardContent, Typography, Box } from '@mui/material';
import ImageSlider from '../components/ImageSlider'; // Import the ImageSlider component
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 320,
  margin: "auto",
  borderRadius: 2,
  boxShadow: 3,
  textDecoration: "none",
  boxShadow:
    "0 4px 8px rgba(255, 255, 255, 0.15), 0 6px 20px rgba(255, 255, 255, 0.15)",
  transition: "transform 0.5s",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));


const ScooterCard = ({ name, description, price, imageUrls }) => {
  // Format the price using toLocaleString
  const formattedPrice = price.toLocaleString();

  return (
    <StyledCard>
      <Box sx={{ height: 300 }}>
        <ImageSlider imageUrls={imageUrls} /> {/* Use the ImageSlider component */}
      </Box>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 3 }}>
          <Typography variant="body1" color="primary">
            ${formattedPrice} per day
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ScooterCard;
