import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { borderRadius, styled } from '@mui/system';
import { NavBar } from '../../components';
import { LinkedIn, Badges } from '../../custom-hooks';
import { Photobook } from '../../components/Photobook';
import profile from '../../assets/images/profilepic.png';
import surfing from '../../assets/images/surf2.jpg';

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

export const About = () => {
  return (
    <Root sx={{
        backgroundColor: '#7e9384',
        }}>
        <NavBar />
        <Main sx={{
                padding: '100px',
            }}>
            
        {/* intro section */}
            <Typography sx={{
                textAlign: 'center',
                fontSize: '65px',
                fontFamily: 'EduVICWANTBeginner-Regular',
                color: '#bfc8d9',
            }}>
                from RD to Full Stack Developer
            </Typography>

            <Div sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                <Typography sx={{
                    width: '50%',
                    padding: '50px',
                    color: 'white',
                    }}>
                    
                    <p>
                        Hi! My name is Tatiana, and I'm a full stack software developer, and a lifelong learner. Starting off as a registered dietitian, 
                        I decided to add to my skillsets with coding. I enjoy creating, learning, and problem solving within the programming realm, and am
                        excited to learn more as I continue to code. While I enjoyed the many interactions I've had with patients and clients over my years
                        as a dietitian, I am an introvert at heart and enjoy providing quiet space for my mind to think, and preserve the energies that might 
                        be better allocated to other resources. 
                    </p>
                    
                    <p>
                        Currently, my coding interests are largely within the healthcare realm. I know how quickly technology is changing healthcare, and 
                        I do find the most fulfillment in creating the user interfaces needed to advance healthcare for both clinicians and patients. 
                        Having once been a healthcare professional, I have a soft spot for creating applications that would help clinicians better communicate
                        their support to their clients. Eventually I'd love to advance the Dietitian's world of technology by developing RD specific tools 
                        for professionals and clients. 
                    </p>

                    <p>
                        My experiences and skillsets contain the following languages, frameworks, and databases: 
                    </p>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>SQL, NoSQL</li> 
                        <li>API, RESTful API</li>
                        <li>Flask/Jinja2</li>
                        <li>React/Typescript</li>
                        <li>Bootstrap</li>
                        <li>Firebase</li>
                        <li>Material UI</li>
                        <li>Git, GitHub</li>
                        <li>Heroku</li> 
                        <li>PGAdmin</li>
        
                </Typography>

                <Box sx={{ 
                    backgroundImage: `url(${profile})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 30%', 
                    clipPath: 'circle(50% at 50% 50%)',
                    marginTop: '120px',
                    height: '350px',
                    width: '350px',
                    }}>                        
                </Box>
            </Div>    
            
    {/* Creditial Badges */}
        <Typography sx={{
            textAlign: 'center',
            fontSize: '75px',
            fontFamily: 'EduVICWANTBeginner-Regular',
            color: '#bfc8d9',
            paddingTop: '100px',
        }}>
            Credentials
        </Typography>
        <Div sx={{
            display: 'flex',
            justifyContent: 'center', 
            backgroundColor: 'white',
            borderRadius: '15px',
            
            }}>
                <Badges />
        </Div>

    {/* LinkedIn */}
        <Div sx={{
            display: 'flex',
            justifyContent: 'center', 
            paddingTop: '100px',
            }}>
                <LinkedIn />
        </Div>


    {/* Hobbies Section */}
        <Typography sx={{
            textAlign: 'center',
            fontSize: '75px',
            fontFamily: 'EduVICWANTBeginner-Regular',
            color: '#bfc8d9',
            paddingTop: '100px',
        }}>
            hobbies
        </Typography>

        <Div sx={{
            display: 'flex',
            justifyContent: 'center',
            }}>


            <Box sx={{ 
                backgroundImage: `url(${surfing})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '50% 30%', 
                clipPath: 'circle(50% at 50% 50%)',
                height: '350px',
                width: '350px',
                }}>                        
            </Box>

            <Typography sx={{
                width: '50%',
                padding: '50px',
                color: 'white',
                textAlign: 'right',
                }}> 
                <p>
                    Having picked up surfing in Maui, it's what my husband and I live for. There's nothing quite like watching turtles pop their heads above water, 
                    pelicans diving around you for their next meal, spotting whales in the distance, or catching the sunrays beaming through the clouds just before 
                    sinking into the night sky. It's in between the sets where you can't help but wonder at God's creation. 
                </p>
                <p>
                    When we're not in the ocean, my husband and I love having people over: whether it's for dinner, game nights, or bible studies, my husband 
                    and I are true social introverts. Some of our favorite memories are with friends/family, and spend the evening talking or playing board games. 
                </p>
                <p>
                    If not indoors or in the ocean, you can find me visiting national parks with my husband. We're obsessed with the varying scenaries and landscapes 
                    of planet earth. 
                </p>
            </Typography>

        </Div>


            <Typography sx={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '75px',
                fontFamily: 'EduVICWANTBeginner-Regular',
                color: '#bfc8d9',
                paddingTop: '100px',
                paddingBottom: '50px',
            }}>
                in photos
            </Typography>

            <Photobook />

        </Main>
    </Root>
  );
}


