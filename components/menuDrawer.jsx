import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MenuPageLinksList } from './menuPageLinksList';
import { MenuPageLinksHorizontal } from './menuPageLinksHorizontal';
import { SocialsList } from './socialsList'

const drawerWidth = 240;

export default function MenuDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start'
    }));

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <Box id="menuDrawer" sx={{  marginLeft: 'auto', textAlign: 'center', padding: '16px' }}>

                <MenuPageLinksHorizontal />
                <IconButton
                    color="headfoot"
                    aria-label="open drawer"
                    edge="end"
                    size="large"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: 'true' }), float: 'right', padding: '3px 60px' }}
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: '#FAC146', 
                        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                        boxShadow: '0px 0px 10px -2px rgba(0,0,0,0.75)',
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader >
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <MenuPageLinksList />
                <Divider />

                <SocialsList textcolor="inherit"/>

            </Drawer>

        </>
    );
}
