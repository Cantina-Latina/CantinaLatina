import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MenuPageLinksList } from './menuPageLinksList';
import { MenuPageLinksHorizontal } from './menuPageLinksHorizontal';
import { MenuPageLinksSocialsList } from './menuPageLinksSocialsList'

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
                    backgroundColor: '#fEcc33',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: '#FAC146', // todo create color like buttons
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

                <MenuPageLinksSocialsList />

            </Drawer>

        </>
    );
}
