import { ImageList, ImageListItem } from "@mui/material"
import img1 from "/images/cantinaImages/P1300076.jpg"
import img2 from "/images/cantinaImages/P3040237.jpg"
import img3 from "/images/cantinaImages/P6180006.jpg"
import img4 from "/images/cantinaImages/P6180012.jpg"
import img5 from "/images/cantinaImages/PA160131.jpg"
import img6 from "/images/cantinaImages/PB070209.jpg"
import img7 from "/images/cantinaImages/R0011227.jpg"
import img8 from "/images/cantinaImages/R0011330.jpg"


const itemData = [
    {
        img: img1.src,
        title: 'Salamanca Site 49',
    },
    {
        img: img2.src,
        title: 'Twighlight Market',
    },
    {
        img: img3.src,
        title: 'The First MOFO Winter Feast',
    },
    {
        img: img4.src,
        title: 'Regular customer',
    },
    {
        img: img5.src,
        title: 'Another regular customer',
    },
    {
        img: img6.src,
        title: 'Joana and Fernanda',
    },
    {
        img: img7.src,
        title: 'Joana Y Felipe',
    },
    {
        img: img8.src,
        title: 'Joana Y Felipe',
    }
]

export default function ImageMozaic( ) {

    // todo get the passed in size

    return (
        <ImageList sx={{ backgroundColor: 'black', width: 850, height: 550 }} cols={4} rowHeight={164}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&auto=format&dpr=2 2x`}
                        alt={item.title}
                        title={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
