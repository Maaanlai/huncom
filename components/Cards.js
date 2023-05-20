import React from "react";
import Card from "@mui/material/Card";
import CardMedia, {CardActionArea, CardContent, Typography} from "@mui/material";

export default function Cards() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image= "/images/aniraa.jpg"
                    alt="teacher picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Anir-Amgalan Bataa
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Been playing for 10+ years
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}


