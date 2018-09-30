import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const MainView = (props) => {
  return (
    <div>
      <AppBar
        position="static"
        color="white"
        className='main__appbar'>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
      <BottomNavigation
        showLabels
        className='main__bottom-navigation'
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
      </BottomNavigation>
    </div>
  );
};

export default MainView;
