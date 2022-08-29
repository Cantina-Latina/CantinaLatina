import { Typography } from "@mui/material";
import {Box} from "@mui/material"
import { Grid } from "@material-ui/core";
import pino from "../images/productPhotos/pino.jpg"
import vege from "../images/productPhotos/vege.jpg"
import queso from "../images/productPhotos/queso.jpg"
import pebre from "../images/productPhotos/pebre-full.jpg"
import vegan from "../images/productPhotos/vegan.png"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Image from 'material-ui-image';

const speil = {
    pino: "Tasmanian pulled beef, golden onions, raisins, herbs, kalamata olive and a slice of egg",
    vege: "Caramelized leeks and onions, sauteed mushrooms, silverbeet and Tasmanian Cheddar",
    queso: "Wikid choice of Ashgrove Smoked Cheddar, Tasmanian Cheddar and mozzarella cheese",
    pebre: "Included with every Empanada, on the side of course! We also sell it by the jar.",
    vegan: "Caramelized leeks and onions, sautéed mushrooms, fresh silverbeet, with pumpkin and extra sliced kalamata olives"
}

const GridItems = ({ pictureSrc, label, speil, id }) => {

    return (
        <>
            <Grid item xs={12} sm={4}>
                <Image 
                    aspectRatio={1.6}
                    src={pictureSrc}
                />
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography variant="h5" id={id} >
                    {label}
                </Typography>
                <Typography>{speil}</Typography>
            </Grid>
        </>
    )
}

export const OurMenu = () => {
    return (
        
            <Box id="ourMenu" sx={{ 
                backgroundColor: '#FFFFFF', 
                padding: '40px',
                borderRadius: '4px'
                }} >
                <Typography variant="h2">
                    Our regular Saturday menu:
                </Typography>
                <Typography variant="h6">
                    In addition to the regulars, we occasionally add specials at Salamanca such as Pollo (chicken), and also Manzana (sweet) empanadas with cream. </Typography>
                    <Typography variant="h6">... or would you like seafood empanadas for your event? Just ask us.</Typography>
                

                <Box sx={{ height: 20 }} ></Box>
                <Grid container spacing={4}>
                    <GridItems
                        id="pino-menu"
                        pictureSrc={pino.src}
                        label={"The Pino"}
                        speil={speil.pino}
                    ></GridItems>
                    <GridItems
                        id="vege-menu"
                        pictureSrc={vege.src}
                        label={"The Vegetariana"}
                        speil={speil.vege}
                    ></GridItems>
                    <GridItems
                        id="queso-menu"
                        pictureSrc={queso.src}
                        label={"Tres Quesos "}
                        speil={speil.queso}
                    ></GridItems>
                    <GridItems
                        id="vegan-menu"
                        pictureSrc={vegan.src}
                        label={"Vegana"}
                        speil={speil.vegan}
                    ></GridItems>
                    <GridItems
                        id="pebre-menu"
                        pictureSrc={pebre.src}
                        label={"Pebre Chili Salsa "}
                        speil={speil.pebre}
                    ></GridItems>
                </Grid>

            </Box>
    )
};

