import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
}));

export default function ContactUs(){
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Box mb={3} sx={{
        height: "50vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: 'url(https://files.oaiusercontent.com/file-9Oaa3McnFILfJsuWCNcjpF4t?se=2024-06-21T16%3A09%3A12Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D405d3605-9745-4322-9d26-9dca770e37b9.webp&sig=PEqtPNzrSb5exUWAUwEoT7X58KnravBjd36/6Rea4lo%3D)',
        backgroundSize: 'cover',
        backgroundPosition: {xs:'center', lg:'50% calc(50% + 100px)'},
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'darken',
      }}>
        <Typography variant="h2" component="h1" letterSpacing={2}>
          GET IN TOUCH WITH US
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{mb: 3}}>
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
                      <span style={{ color: '#1ebea5' }}>Phone: 076 987 6543</span>
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
                      moramaths123@gmail.com
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
                      <span style={{ color: '#1ebea5' }}>Phone: 076 987 6543</span>
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

