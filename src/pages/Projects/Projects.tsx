import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import computer from '../../assets/images/computer.png';
import computer2 from '../../assets/images/computer2.png';
import computer3 from '../../assets/images/computer3.png';
import { NavBar } from '../../components';
import basics from '../../assets/images/basicsapp.png';


const Root = styled('div')({
    padding: 0,
    margin: 0,
})

const Header = styled('div')({
})

const Main = styled('div')({
})

const Div = styled('div')({
})


export const Projects = () => {
    return (
        <Root>
            <NavBar />
            <Typography sx={{
                padding: '100px',
                textAlign: 'Right',
                fontSize: '75px',
                fontFamily: 'EduVICWANTBeginner-Regular',
                color: '#ef5d2a',
            }}>
                Projects
            </Typography>
            <Div sx={{
                display: 'flex', 
                justifyContent: 'space-around',
                }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={basics}
                        alt="project-screenshot"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Recipe App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This app allows you to look up recipes by ingredient. You can also store these recipes 
                            into your profile, specific to your login, for later reference. This application uses the Spoonacular 
                            API database.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href='https://ctbasics.herokuapp.com/'>Visit Project</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={computer2}
                        alt="project-screenshot"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Weather App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This application allows you to look up the current temperature and the highs and lows for any zip code. 
                            This application uses the openweather API database. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Visit Project</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={computer3}
                        alt="project-screenshot"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Surfboard App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Sapiente minima consequatur ipsam velit quaerat atque adipisci 
                            sequi ad iusto dicta? Error in quis quod maiores eligendi 
                            cumque molestias voluptatem qui?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Visit Project</Button>
                    </CardActions>
                </Card>
            </Div>
        </Root>

    )
}


