import * as React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import profilepic from '../../assets/images/profilepic.png'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Div = styled('div')({
})


export const Main = () => {
  return (

    <Box sx={{ 
        paddingTop: 20,
        paddingBottom: 20,
        minWidth: 500,
        display: 'flex',
        justifyContent: 'space-around',
        }}>
        
    <Div sx={{
        display: 'flex',
        justifyContent: 'space-around',
        }}>
        
        <Typography sx={{
            width: 400,
            }}
        variant="body2">
            My name is Tatiana. Here, you'll find an outline of my experience, background, and why I made the switch to programming. Looking forward to being friends! 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates quia laborum quos quas nihil reiciendis, laudantium nam deleniti, id vero consequatur unde eaque quae iusto consectetur adipisci voluptatum. Impedit! 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat necessitatibus dolorum odio cum libero debitis repellendus ad, aut consequuntur voluptate quasi tempore, saepe sapiente provident temporibus nihil. Dolores, repellat quas?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est facilis facere molestias magni ad rerum ut asperiores cupiditate? Excepturi suscipit, omnis maxime deserunt placeat voluptatum ea quam maiores officia.
          <br />
        </Typography>
    </Div>

        <Box sx={{
            width: 320,
            height: 430,
            backgroundImage: `url(${profilepic})`,
            backgroundSize: 'contain',
            borderRadius: 15,
            }}/>
    </Box>
  );
}

