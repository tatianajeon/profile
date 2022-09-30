import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
 

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}




export const NavBar = () => {

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs aria-label="nav tabs example">
        <Tab label="Home" href="/" value={0} />
        <Tab label="About" href="/about" value={1} />
        <Tab label="Projects" href="/projects" value={2} />
      </Tabs>
    </Box>
  );
}
