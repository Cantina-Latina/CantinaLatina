import * as React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { MenuPageLinks } from './menuPageLinks';


export const MenuPageLinksHorizontal = () => {

    return (
        <>
        <ButtonGroup variant="text" color="headfoot" size="small" aria-label="small button group">
            {MenuPageLinks.map((item) => (
                <Button sx={{ display: { sm: 'none', md: 'block' }, padding: "0 15px"}} key={item[0]} href={item[1]} >
                    {item[0]}
                </Button>
            ))}
        </ButtonGroup>

    </>
    )

};
