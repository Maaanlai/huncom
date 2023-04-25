import { Button } from "@mui/material";
import ProductHeroLayout from './HeroLayout';
import Typography from '@mui/material/Typography';

const backgroundImage = '/images/imgmainbg.jpg'

function Hero() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9',
                backgroundPosition: 'center',
            }}
        >
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Catchy Phrase
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
            >
                IDK SMTH ELSE HERE TOO
            </Typography>
            <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                href="/register"
                sx={{ minWidth: 200 }}
            >
                Бүртгүүлэх
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                CAN WRITE HERE
            </Typography>
        </ProductHeroLayout>
    )
}

export default Hero;
