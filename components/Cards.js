import React from "react";
import Card from "@mui/material/Card";
import Link from "next/link";
import CardMedia, {CardActionArea, CardContent, Typography} from "@mui/material";

export default function Cards(props) {
    return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.path}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )

}


