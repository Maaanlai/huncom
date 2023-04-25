import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

export default function CardItem() {
  return (
      <div className='px-60 pt-6 pb-6 grid grid-cols-3 gap-5 place-content-between justify-items-center shadow-lg content-center bg-slate-300'>
                  <Card sx={{ maxWidth: 345}} >
                      <Link href="/register">
                          <CardActionArea>
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="images/guitarbg.jpg"
                                  alt="guitar"
                              />
                              <CardContent>
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
                              <CardContent>
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
                            <CardContent>
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
                          <CardContent>
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

                  <Card sx={{ maxWidth: 345 }} >
                      <Link href="/register">
                          <CardActionArea>
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="images/pianobg.jpg"
                                  alt="Piano"
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      Piano
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
                                  image="images/flutebg.jpg"
                                  alt="Flute"
                              />
                              <CardContent>
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
