import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const menuPageLinks = [
    [ 'Home', '/'],
    [ 'About Us', '/about'],
    [ 'Our Emapandas', '/empanadas'],
    [ 'Our Pebre - Chili Salsa', '/pebre'],
    [ 'Gluten free?', '/events'],
]


export const MenuPageLinks = <List>
    {menuPageLinks.map((item) => (
        <ListItem key={item[0]} disablePadding>
            <ListItemButton to={item[1]} >
                {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={item[0]}  />
            </ListItemButton>
        </ListItem>
    ))}
</List>
;
