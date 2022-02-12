import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


function PricingContent() {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        
          <Typography variant="h6"
          color="inherit"
          noWrap sx={{ flexGrow: 1 }}>
          <Link
          variant="button"
          color="text.primary"
          style={{textDecoration:"none", textTransform: "capitalize",fontSize:"20px"}}
          href="/"
          sx={{ my: 1, mx: 1.5 }}
        >
        Thisday
        </Link>
          
          </Typography>
        
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <nav styles={{textDecoration: "none"}}>
            <Link
              variant="button"
              color="text.primary"
              style={{textDecoration:"none", textTransform: "capitalize"}}
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              style={{textDecoration:"none", textTransform: "capitalize"}}
              href="/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
            variant="button"
            color="text.primary"
            style={{textDecoration:"none", textTransform: "capitalize"}}
            href="/contact"
            sx={{ my: 1, mx: 1.5 }}
          >
          Contact
          </Link>
         
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          <AccountCircle />
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}