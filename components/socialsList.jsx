import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemButton from '@mui/material/ListItemButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Email } from "react-obfuscate-email";
import { Button, useTheme } from '@mui/material';


const MenuPageSocialLinks = [
    {
        title: 'Email Us',
        label: 'Email',
        link: 'tascantinalatina@gmail.com',
        icon: <EmailIcon />,
        mailtoLink: true
    },
    {
        label: 'Facebook',
        link: "https://www.facebook.com/cantinalatinatasmania",
        icon: <FacebookIcon />,
        mailtoLink: false
    },
    {
        label: 'Instagram',
        link: "https://www.instagram.com/cantinalatina",
        icon: <InstagramIcon />,
        mailtoLink: false
    }
];


export const SocialsList = (props) => {

    const { textcolor, ...others } = props;

    return (
        <>


            <List dense={true}>
                {MenuPageSocialLinks.map((item) => (
                    <ListItem key={item.label} >

                        {item.icon}

                        {(item.mailtoLink) ?
                            <ListItemButton ><Email style={{color: textcolor, textDecoration: 'none', fontWeight: 'bolder'}} email={item.link} subject="Web Enquiry">{item.title}</Email></ListItemButton>
                            : <ListItemButton style={{color: textcolor,  fontWeight: 'bolder'}} to={item.link}>
                                {item.label}
                            </ListItemButton>
                        }
                    </ListItem>
                ))}
            </List>
        </>


    )
};


