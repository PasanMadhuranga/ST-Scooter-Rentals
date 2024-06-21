// // import React from 'react'

// // export default function ContactUs() {
// //   return (
// //     <div>
// //       Contact us
// //     </div>
// //   )
// // }
// // src/ContactUs.js

// import React from 'react';
// import { Container, Grid, Card, CardContent, Typography, Box, Divider } from '@mui/material';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// // import Divider from '@mui/material/Divider';

// const ContactUs = () => {
//   return (
//     <Container width="100%" style={{ textAlign: 'center'}}>
//       <Box mb={5} sx={{
//         height: "50vh",
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "white",
//         textAlign: "center",
//         backgroundImage: 'url(https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b2/df/1e.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         backgroundBlendMode: 'darken',
//         // animation: `${fadeIn} 2s ease-in-out`,
//       }}>
//         <Typography variant="h4" component="h1">
          
//           WE ARE HERE FOR YOU
//         </Typography>
//         <Divider />
//       </Box>
//       <Box mb={5} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <WhatsAppIcon style={{ fontSize: 50, marginBottom: 10 }} />
//               <Typography variant="h6" component="h2">
//                 WhatsApp
//               </Typography>

//               <Typography variant="body1">
//                 Phone: 076 987 6543
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <EmailIcon style={{ fontSize: 50, marginBottom: 10 }} />
//               <Typography variant="h6" component="h2">
//                 E-mail
//               </Typography>
//               <Typography variant="body1">
//                moramaths123@gmail.com
//               </Typography>
              
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <PhoneIcon style={{ fontSize: 50, marginBottom: 10 }} />
//               <Typography variant="h6" component="h2">
//                 Phone
//               </Typography>

//               <Typography variant="body1">
//                 Phone: 076 987 6543
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default ContactUs;



import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactUs = () => {
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Box mb={5} sx={{
        height: "50vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: 'url(https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b2/df/1e.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      }}>
        <Typography variant="h4" component="h1">
          WE ARE HERE FOR YOU
        </Typography>
        <Divider />
      </Box>
      <Container maxWidth="lg">
        <Box mb={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <WhatsAppIcon style={{ fontSize: 50, marginBottom: 10 }} />
                  <Typography variant="h6" component="h2">
                    WhatsApp
                  </Typography>
                  <Typography variant="body1">
                    Phone: 076 987 6543
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <EmailIcon style={{ fontSize: 50, marginBottom: 10 }} />
                  <Typography variant="h6" component="h2">
                    E-mail
                  </Typography>
                  <Typography variant="body1">
                    moramaths123@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <PhoneIcon style={{ fontSize: 50, marginBottom: 10 }} />
                  <Typography variant="h6" component="h2">
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    Phone: 076 987 6543
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
