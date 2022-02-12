import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { GridSpinner } from "react-spinners-kit";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




function PricingContent() {

  const [data, setData] = useState(2);
  const [searchTerm, setSearchTerm] = React.useState('')
  const [stockData, setstockData] = useState([])
  const [listImages, setlistImages] = useState([])
  const [isLoader, setisLoader] = useState(true)
  var listOfImages =[];

  const loadMore = () => {
    setData(data + 3);
    console.log(data);
  }
  const importAll =(r)=> {
    return r.keys().map(r);
}
  useEffect(() => {
    getAssests();
    listOfImages = importAll(require.context('/src/images/', false, /\.(png|jpe?g|svg)$/));
      // console.log("hey2",listOfImages)
      setlistImages(listOfImages)
  }, [])

  const getAssests = async () => {
    const headerOption = {
      headers: {
        'X-API-KEY': '281b5ce1492d4fd3834982b2ae05a649',
        'Accept': 'application/json',

      },
    }
    const data = await axios.get('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20', headerOption);
    const response = data.data.assets;
    setisLoader(false)
    setstockData(response)
    console.log(response,"hi")
  }

  return (
    <React.Fragment>

{console.log("fffffff",listImages)}
    
      {isLoader ? <div id="loader">
        <GridSpinner size={30} color="#686769" loading={true}></GridSpinner>
      </div> : ''}
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h3"
              variant="h3"
              color="text.primary"
              gutterBottom
            >
              Discover, collect, and sell extraordinary NFTs
            </Typography>
            <Typography variant="h4" color="text.secondary" component="h5">
              OpenSea is the world's first and largest NFT marketplace
            </Typography>
            <div style={{ marginTop: "25px" }}>
              <Stack spacing={2} direction="row">
                <Button height="15" variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
              </Stack>
            </div>
            <div style={{ marginTop: "85px", }}>
              <Link to="#" style={{ textDecoration: "none" }}>
                <PlayCircleIcon />
                OpenSea is the world's first and OpenSea
              </Link>
            </div>
          </Grid>
          {
            listOfImages.map(
              (image, index) => { console.log("imageee",listImages); return (<img key={index} src={image} alt="info"></img>)
             } )
      }
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia
                component="img"
                height="353"
                image="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography align='c' gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>

              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" component="main">
        <Toolbar style={{ justifyContent: "center" }}>
          <Search style={{ border: "1px solid", rightradius: "10px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
        <Typography align='center' variant="h5" component="div">
          Lizard
        </Typography>
        <Grid container spacing={5} alignItems="flex-end">
          {stockData.filter((data) => {

            if (searchTerm == "") {
           
              return data
            } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              
              console.log('hsdghsg',data)
              return data
             
            }
            
          }).map((data,i) => (
            console.log("heyy",listOfImages),
            <Grid
              data
              key={data.title}
              xs={12}
              sm={data.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardContent>
                  <Link to={`/image/${data.asset_contract.address}/${data.token_id}`}>
                    <ImageListItem key={data.img} style={{ with: "338px" }}>
                      <img
                      // image="src/imge/download.jpg"
                        src={`${data}`}
                          // src="/imge/download.jpg"

                        
                      />
                   <img
                   src={listImages[i]}
                   />
                     <h5>{data.id}</h5>
                      <Typography align='center' variant="h5" component="div">
                        {data.name}
                      </Typography>
                      <p style={{
                        lineHeight: "normal", textOverflow: "ellipsis", display: "-webkit-box",
                        webkitLineClamp: "2", lineClamp: "2", webkitBoxOrient: "vertical"
                      }}>
                        {data.description}
                      </p>
                    </ImageListItem>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* {data < stockData.length && (
          <button onClick={loadMore}>
            Click me
          </button>
        )} */}
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}