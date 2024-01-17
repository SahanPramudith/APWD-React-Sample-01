import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
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
import TurnRightSharpIcon from '@mui/icons-material/TurnRightSharp';
import ViewListSharpIcon from '@mui/icons-material/ViewListSharp';
import Avatar from "../avatar/avatar.jsx";
import ProfileAvatar from "../avatar/avatar.jsx";
import Dashbord from '../Pagges/Dashbord/Dashbord.jsx';
import {Routes, Route, NavLink, Navigate,} from "react-router-dom";
import User from '../Pagges/User/User.jsx';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import routers from "../Common/Navigation/router.jsx";



const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function App() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const getrout= (rout) =>
        rout.map((val,index)=>(
            <Route path={val.path} element={val.component}/>
        ))

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <ViewListSharpIcon fontSize={'large'}/>
                    </IconButton>

                    <Typography variant="h6" noWrap component="div"fontStyle={'italic'} fontWeight={'bolder'} fontFamily={'monospace'} fontSize={'xx-large'}>
                       My Profile
                    </Typography>
                    <Avatar/>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>

                <DrawerHeader>
                    <h1>heloo</h1>
                    <IconButton onClick={handleDrawerClose}>

                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}

                    </IconButton>

                </DrawerHeader>
                <Divider/>
                <List>
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))} */}
                    {
                        routers.map((val,index)=>(
                            <NavLink to={val.path} style={{textDecoration: 'none', color: 'royalblue'}}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <DashboardIcon style={{color: 'red'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary={val.name} sx={{opacity: open ? 1 : 0}}/>
                                </ListItemButton>
                            </NavLink>
                        ))
                    }



                    {/*<NavLink to={'/user'} style={{textDecoration: 'none', color: 'rebeccapurple', fontWeight: "bold"}}>*/}
                    {/*    <ListItem key={'User'} disablePadding sx={{display: 'block'}}>*/}
                    {/*        <ListItemButton*/}
                    {/*            sx={{*/}
                    {/*                minHeight: 48,*/}
                    {/*                justifyContent: open ? 'initial' : 'center',*/}
                    {/*                px: 2.5,*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            <ListItemIcon*/}
                    {/*                sx={{*/}
                    {/*                    minWidth: 0,*/}
                    {/*                    mr: open ? 3 : 'auto',*/}
                    {/*                    justifyContent: 'center',*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                <AccessibilityOutlinedIcon style={{color: "red"}}/>*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText primary={"User"} sx={{opacity: open ? 1 : 0}}/>*/}
                    {/*        </ListItemButton>*/}
                    {/*    </ListItem>*/}
                    {/*</NavLink>*/}
                </List>
                <Divider/>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography paragraph>
                    <Routes>
                        {getrout(routers)}
                        <Route path={'*'} element={<Navigate to={'/dashbord'}/> }/>
                    </Routes>
                </Typography>
            </Box>
        </Box>
    );
}