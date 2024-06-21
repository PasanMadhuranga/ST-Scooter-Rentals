import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/system';
import green from '@mui/material/colors/green';

const FloatingButton = styled(Fab)({
  position: 'fixed',
  bottom: 50,
  right: 20,
  zIndex: 1000,
    backgroundColor: green[400],
});

const WhatsApp= () => {
  const whatsappNumber = '+94741371578'; // Your WhatsApp number

  return (
    <Tooltip title="Chat with us on WhatsApp" arrow>
      <FloatingButton
        color="success"
        aria-label="whatsapp"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        sx={{ boxShadow: 3 ,width: 60, height: 60}}
      >
        <WhatsAppIcon style={{ fontSize: 40, color:'white' }} />
      </FloatingButton>
    </Tooltip>
  );
};

export default WhatsApp;
