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
                marginTop: "70px"
            }}
        >
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Music Tutor Locator?
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
            >
                Start Learning Now
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
                Discover the experience
            </Typography>
        </ProductHeroLayout>
    )
}

export default Hero;
