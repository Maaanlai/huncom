import { CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material'
import Card from '@mui/material/Card'
import Link from 'next/link'

export default function CardItem(props) {
    return (
        <Card sx={{maxWidth: 345}}>
            <Link path={props.path}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    img={props.src}
                    alt=""

                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {props.label}
                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
        </Card>
    )

}


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function CardItem() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="images/guitarbg.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
