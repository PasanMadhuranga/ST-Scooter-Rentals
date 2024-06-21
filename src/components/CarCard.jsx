import { Card, CardContent, Typography, Box } from '@mui/material';
import ImageSlider from '../components/ImageSlider'; // Import the ImageSlider component



const CarCard = ({ name, description,passengers, price, imageUrls }) => {
  // Format the price using toLocaleString
  const formattedPrice = price.toLocaleString();

  return (
    <Card sx={{ maxWidth: 350, margin: 'auto', borderRadius: 2, boxShadow: 3, textDecoration: 'none' }}>
      <Box sx={{ height: 250 }}>
        <ImageSlider imageUrls={imageUrls} /> 
      </Box>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          max: {passengers}pax
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 3 }}>
          <Typography variant="h6" color="primary" sx={{fontWeight: 'bold'}}>
            ${formattedPrice} per day
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard;