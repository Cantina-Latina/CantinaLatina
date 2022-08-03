import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { MenuPageLinks } from './menuPageLinks';


export const MenuPageLinksList = () => {

    return (

        <List>
            {MenuPageLinks.map((item) => (
                <ListItem key={item[0]} disablePadding>
                    <ListItemButton to={item[1]} >
                        {item[0]}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

    )
};
