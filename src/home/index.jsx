import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import MenuAppBar from './components/MenuAppBar';
import CenteredTabs from './components/CenteredTabs';
import Content from './components/Content';

const styles = () => ({
  root: {
    background: 'antiquewhite'
  },
});

const Home = ({ classes }) => (
  <div className={classes.root}>
    <MenuAppBar />
    <Content />
  </div>
);

export default withStyles(styles)(Home);
