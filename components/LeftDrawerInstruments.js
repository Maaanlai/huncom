import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Navbar from '../components/Navbar'
import {useEffect} from 'react';


async function getInstruments(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/instruments/records?page=1&perPage=10');
    const data = await res.json;
    return data;    
}

const drawerWidth = 400;

export default function LeftDrawerInstruments() {

    useEffect(() => {
        getInstruments()
        .then((data) => {console.log(data.items)});
    }, [])

    return (
        <div>
            <div>
                <Box sx={{ display: 'flex', color: 'black'}}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, color: "primary"}}
                    >
                        <Navbar/>
                    </AppBar>
                    <Drawer
                        PaperProps={{
                            sx: {
                                backgroundColor: '#3B82F6',
                                width: drawerWidth,
                                    flexShrink: 0,
                                    '& .MuiDrawer-paper': {
                                        width: drawerWidth,
                                        boxSizing: 'border-box',
                            }
                        }}}
                        variant="permanent"
                        anchor="left"
                    >
                        <Toolbar />
                        <Divider />
                        <div className="items-center justify-center bg-blue-500">
                            <div className="shadow-card flex flex-col rounded-xl bg-white bg-clip-border bg-blue-500">
                                <div className="mx-4 -mt-6 translate-y-0">
                                        <img
                                            className="w-auto rounded-lg bg-blue-500 max-h-60"
                                            src="/images/guitar.jpg"
                                            alt="card image"
                                        />
                                </div>
                                <div className="text-2xl flex-1 p-6">
                                    <h4 className="opcacity-60 mb-3">
                                        Guitar Teachers
                                    </h4>
                                    <div className="text-secondary flex-1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <List>
                            {['Guitar', "Piano", "Violin", "Drums"].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
            </div>
        </div>
            );
            }