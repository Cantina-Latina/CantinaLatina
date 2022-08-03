import * as React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { MenuPageLinks } from './menuPageLinks';


export const MenuPageLinksHorizontal = () => {

    return (
        <>
        <ButtonGroup variant="text" color="buttons" size="small" aria-label="small button group">
            {MenuPageLinks.map((item) => (
                <Button key={item[0]} href={item[1]} >
                    {item[0]}
                </Button>
            ))}
        </ButtonGroup>

    </>
    )

};
