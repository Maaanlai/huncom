import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 400;

export default function LeftDrawerInstruments() {
    return (
        <div>
            <div>
                <div>
                    <Box sx={{ display: 'flex', color: 'black'}}>
                        <CssBaseline />
                        <AppBar
                            position="fixed"
                            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, color: "primary"}}
                        >
                        </AppBar>
                        <Drawer
                            PaperProps={{
                                sx: {
                                    marginTop:"69px",
                                    backgroundColor: '#1976d2',
                                    width: drawerWidth,
                                    flexShrink: 0,
                                    '& .MuiDrawer-paper': {
                                        width: drawerWidth,
                                    }
                                }}}
                            variant="permanent"
                            anchor="left"
                        >
                            <Toolbar />
                            <div className="items-center justify-center bg-inherit border-none">
                                <div className="shadow-card flex flex-col ">
                                    <div className="mx-4 -mt-6 translate-y-0">
                                        <img
                                            className="w-auto rounded-lg bg-blue-500 max-h-60"
                                            src="/images/guitar.jpg"
                                            alt="card image"
                                        />
                                    </div>
                                    <div className="text-2xl flex-1 p-6 text-center text-white">
                                        <h4 className="opcacity-60 mb-3">
                                            Teachers
                                        </h4>
                                        <div className="text-secondary flex-1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl text-center text-white">
                                <h5 className="">
                                    The Instruments we offer
                                </h5>
                            </div>
                            <List>
                                {['Guitar', "Piano", "Violin", "Drums", "Recorder", "Flute", "Banjo"].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton className="text-white">
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </Box>
                </div>
            </div>
        </div>

            );
            }