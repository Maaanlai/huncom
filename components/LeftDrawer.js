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
import Navbar from "../components/Navbar";

const drawerWidth = 400;

export default function LeftDrawer() {
    return (
        <div>
            <div>
                <Box sx={{ display: 'flex', color: 'black'}}>
                    <CssBaseline />
                    <AppBar
                        position="sticky"
                        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, color: "primary"}}
                    >
                    </AppBar>
                    <Navbar/>
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
                                            className="w-auto rounded-lg bg-blue-500"
                                            src="/images/aniraa.jpg"
                                            alt="card image"
                                        />
                                </div>
                                <div className="text-2xl flex-1 p-6">
                                    <h4 className="opcacity-60 mb-3">
                                        Анир-Амгалан Батаа
                                    </h4>
                                    <div className="text-secondary flex-1">
                                        <p>
                                            Guitar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <List>
                            {['Location', 'Review', 'Phone'].map((text, index) => (
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