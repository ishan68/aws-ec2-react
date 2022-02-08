import * as React from 'react';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




function PricingContent() {
  return (
    <React.Fragment >
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none',  } }} />
      <Container
        maxWidth="lg"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
     
        <Copyright sx={{ mt: 0 }}  />
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}