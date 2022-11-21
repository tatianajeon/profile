import { styled } from '@mui/system';
import surf1 from '../../assets/images/surf1.jpg';
import { NavBar } from '../../components';

const Root = styled('div')({
    padding: 0,
    margin: 0,
})

const MainText = styled('div')({

})


export const Home = () => {
    
    return (
        <Root>
            <MainText sx={{ 
                backgroundImage: `url(${surf1})`,
                height: '800px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                
                fontFamily: 'EduVICWANTBeginner-Regular',
                paddingLeft: '300px', 
                paddingTop: '250px',
                fontSize: '30px',
                color: '#655556',
                }}>

                <h1>Tatiana Jeon</h1>
                <p>Full Stack Programmer</p>
                <NavBar />
                {/* <Contact /> */}
            </MainText>
        </Root>

      );
    }


    