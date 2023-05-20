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
      <div className='px-60 pt-6 pb-6 grid grid-cols-3 gap-5 place-content-between justify-items-center shadow-lg content-center bg-[#dddacf]'>
                  <Card sx={{ maxWidth: 345}} className="bg-secondary">
                      <Link href="/register">
                          <CardActionArea>
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="images/guitarbg.jpg"
                                  alt="guitar"
                              />
                              <CardContent  className="bg-[#dbd6e5]">
                                  <Typography gutterBottom variant="h5" component="div">
                                    Guitar
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
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
                                  image="images/violinbg.jpg"
                                  alt="Violin"
                              />
                              <CardContent  className="bg-[#dbd6e5]">
                                  <Typography gutterBottom variant="h5" component="div">
                                      Violin
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      lorem ipsum
                                  </Typography>
                              </CardContent>
                          </CardActionArea>
                      </Link>
                  </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <Link href="/register">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="images/brassbg.jpg"
                                alt="brass"
                            />
                            <CardContent  className="bg-[#dbd6e5]">
                                <Typography gutterBottom variant="h5" component="div">
                                    Brass
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    lorem ipsum
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>

              <Card sx={{ maxWidth: 345 }}>
                  <Link href="/register">
                      <CardActionArea>
                          <CardMedia
                              component="img"
                              height="140"
                              image="images/drumsbg.jpg"
                              alt="brass"
                          />
                          <CardContent  className="bg-[#dbd6e5]">
                              <Typography gutterBottom variant="h5" component="div">
                                  Brass
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
                                      Piano
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
          </div>
  );
}
