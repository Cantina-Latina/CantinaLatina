import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@material-ui/core";
import pino from "../images/productPhotos/pino.jpg"
import vege from "../images/productPhotos/vege.jpg"
import queso from "../images/productPhotos/queso.jpg"
import pebre from "../images/productPhotos/pebre.jpg"
import vegan from "../images/productPhotos/vegan.png"

const speil = {
    pino: "Tasmanian pulled beef, golden onions, raisins, herbs, olive and egg",
    vege: "Caramelized leeks and onions, sauteed mushrooms, silverbeet and Tasmanian Cheddar",
    queso: "Ashgrove Smoked Cheddar, Tasmanian Cheddar and mozzarella cheese",
    pebre: "Included with every Empanada, on the side of course! We also sell it by the jar.",
    vegan: "Caramelized leeks and onions, sautéed mushrooms, fresh silverbeet"
}

const GridItems = ({ pictureSrc, label, speil, id }) => {

    return (
        <>
            <Grid item xs={12} md={12}>
                <Typography variant="h5" id={id}>
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={6} md={4} >
                <Box sx={{borderRadius: "4px", position: "static", overflow: "hidden"}} >
                <img
                    src={pictureSrc}
                    width={"100%"}
                    srcSet={pictureSrc}
                    alt={label}
                    loading="lazy"
                />
                </Box>
            </Grid>
            <Grid item xs={6} md={8}>
                <Typography sx={{fontFamily: 'specky1'}}>
                    {speil}</Typography>
            </Grid>
        </>

    )
}

export const OurMenu = () => {
    return (
        
            <Box id="ourMenu" sx={{ 
                position: 'relative', 
                backgroundColor: '#FFFFFF', 
                padding: '40px',
                borderRadius: '4px'
                }} >
                <Typography variant="h3">
                    Our regular Saturday menu:
                </Typography>
                <Box sx={{ height: 20 }} ></Box>
                <Grid container spacing={2}>
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
                        label={"Vegan Empanada"}
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

