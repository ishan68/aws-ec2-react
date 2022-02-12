import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Modal, ModalContent } from "./Modal";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { GridSpinner } from "react-spinners-kit";




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {

    const [isOpen, setIsopen] = useState(false);
    const [isLoader, setIsLoader] = useState(true);
    const [data, setdata] = useState({})
    const showModal = () => setIsopen((prev) => !prev);
    const location = useLocation();

    useEffect(() => {
        var assetAddress = location.pathname.split('/')[2];
        var tokenId = location.pathname.split('/')[3];
        getAssetDetails(assetAddress, tokenId)
        console.log("data", data);
    }, [])


    const getAssetDetails = async (assetAddress, tokenId) => {
        const headerOption = {
            headers: {
                'X-API-KEY': '281b5ce1492d4fd3834982b2ae05a649',
                'Accept': 'application/json',
            },
        }
        const data = await axios.get(`https://api.opensea.io/api/v1/asset/${assetAddress}/${tokenId}/`, headerOption);
        setdata(data.data)
        setIsLoader(false)
    }

    return (
        <>
            {isLoader ? <div id="loader">
                <GridSpinner size={30} color="#686769" loading={true}></GridSpinner>
            </div> : ''}
            <Container maxWidth="lg">
                <div style={{ marginTop: "50px" }}>
                    <Card >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Modal onOpen={showModal}>
                                    <TransformWrapper
                                        defaultScale={1}
                                        defaultPositionX={1}
                                        defaultPositionY={1}
                                    >
                                        <TransformComponent>
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                src="https://picfiles.alphacoders.com/246/thumb-1920-246424.jpg"
                                                // src={`${data.image_original_url == null ? data.image_preview_url : data.image_original_url}?w=248&fit=crop&auto=format`}
                                                // alt="Paella dish"
                                            />
                                        </TransformComponent>
                                    </TransformWrapper>
                                </Modal>
                                {isOpen && (
                                    <ModalContent onClose={() => setIsopen(false)}>
                                        <TransformWrapper
                                            defaultScale={1}
                                            defaultPositionX={1}
                                            defaultPositionY={1}
                                        >
                                            <TransformComponent>
                                                <CardMedia
                                                    component="img"
                                                    height="610"
                                                    src="https://picfiles.alphacoders.com/246/thumb-1920-246424.jpg"
                                                    // src={`${data.image_original_url == null ? data.image_preview_url : data.image_original_url}?w=248&fit=crop&auto=format`}

                                                    alt="Paella dish"
                                                />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </ModalContent>
                                )}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CardContent>

                                    <CardContent>
                                        <Typography paragraph>{data.name}:</Typography>

                                        <Typography paragraph>
                                            {data.description}.
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                </div>
            </Container>
        </>
    );
}