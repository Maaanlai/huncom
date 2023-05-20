import * as React from 'react';
import {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Link from 'next/link';
import "./tailwind.config"

export default function CardItem() {

    return (
        <div className='pl-[405px] px-6 pt-24 pb-6 grid grid-cols-3 gap-5 place-content-between justify-items-center shadow-lg content-center bg-[#dddacf]'>
            <Card sx={{ width: 345}} className="bg-secondary">
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            sx={{maxHeight: 215}}
                            component="img"
                            height="140px"
                            image="images/aniraa.jpg"
                            alt="guitar"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                Anir-Amgalan Bataa
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Been playing guitar for 10 years
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }} >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="images/violinbg.jpg"
                            alt="Violin"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                Violin Teacher
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We dont really have one so this is a placeholder
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            sx={{maxHeight: 195}}
                            component="img"
                            height="140"
                            image="images/khangai.jpg"
                            alt="brass"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                Khangai Batkhuu
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                He cannot really play but he chose banjo for some reason
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            sx={{maxHeight: 230, width:345}}
                            component="img"
                            height="140"
                            image="images/bat.jpg"
                            alt="brass"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                Bat
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This is a picture from years ago
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="bg-[#dbd6e5]" >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="images/pianobg.jpg"
                            alt="Piano"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                And other teachers
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }} >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="images/flutebg.jpg"
                            alt="Flute"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                Flute
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="bg-[#dbd6e5]" >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="images/pianobg.jpg"
                            alt="Piano"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                And other teachers
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="bg-[#dbd6e5]" >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="images/pianobg.jpg"
                            alt="Piano"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                And other teachers
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="bg-[#dbd6e5]" >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="images/pianobg.jpg"
                            alt="Piano"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                And other teachers
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="bg-[#dbd6e5]" >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="images/pianobg.jpg"
                            alt="Piano"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                And other teachers
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="bg-[#dbd6e5]" >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="images/pianobg.jpg"
                            alt="Piano"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                And other teachers
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="bg-[#dbd6e5]" >
                <Link href="/register">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="images/pianobg.jpg"
                            alt="Piano"
                        />
                        <CardContent  className="bg-[#dbd6e5]">
                            <Typography gutterBottom variant="h5" component="div">
                                And other teachers
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                lorem ipsum
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    );
}