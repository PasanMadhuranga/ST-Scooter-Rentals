import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import contactUsImage from '../assets/page_images/contactUs_image.webp';

// Styled Card component to include hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[6],
  },
  width: "300px",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
}));

export default function ContactUs(){
  return (
      <Box sx={{
        minHeight: "calc(100vh - 128px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: `url(${contactUsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'darken',
      }}>
        <Typography variant="h3" component="h1" letterSpacing={2} m={3}>
          GET IN TOUCH WITH US
        </Typography>
      
      <Container maxWidth="lg" sx={{my: {xs: 3, sm: 6}}}>
        {/* <Box mb={1} sx={{ display: 'flex', justifyContent: 'center'}}> */}
          <Grid container spacing={3} justifyContent="center" >
            <Grid item xs={12} sm={4} sx={{display: "flex", justifyContent:"center"}}>
              <StyledCard>
                <CardContent>
                  <WhatsAppIcon style={{ fontSize: 50, marginBottom: 10 }} />
                  <Typography variant="h6" component="h2" sx={{mb:1}}>
                    WhatsApp
                  </Typography>
                  <Typography variant="body1">
                    <a href="https://wa.me/94769876543" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <span style={{ color: '#303f9f', fontSize: 22  }}>+94 76 987 6543</span>
                    </a>
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4} sx={{display: "flex", justifyContent:"center"}}>
              <StyledCard>
                <CardContent>
                  <EmailIcon style={{ fontSize: 50, marginBottom: 10 }} />
                  <Typography variant="h6" component="h2" sx={{mb:1}}>
                    E-mail
                  </Typography>
                  <Typography variant="body1">
                    <a href="mailto:moramaths123@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                    agstmadushanka1997@gmail.com
                    </a>
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4} sx={{display: "flex", justifyContent:"center"}}>
              <StyledCard>
                <CardContent>
                  <PhoneIcon style={{ fontSize: 50, marginBottom: 10 }} />
                  <Typography variant="h6" component="h2" sx={{mb:1}}>
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    <a href="tel:+94769876543" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <span style={{ color: '#303f9f', fontSize: 22 }}>+94 76 987 6543</span>
                    </a>
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        {/* </Box> */}
      </Container>
      </Box>
  );
};

