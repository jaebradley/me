import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {
  Drawer,
  Divider,
} from '@material-ui/core';
import {
  Email as EmailIcon,
} from '@material-ui/icons';

import InformationCard from './components/InformationCard';
import MenuAppBar from './components/MenuAppBar';

const styles = () => ({
  drawerPaper: {
    position: 'relative',
    float: 'right',
  },
  icon: {
    margin: 0,
  },
});

const Home = ({ classes }) => (
  <div>
    <MenuAppBar />
    <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon className={classes.icon} />
                  </ListItemIcon>
                </ListItem>
              </List>
              </Drawer>
    <main className={classes.content}>
      <InformationCard
        header={'About Me'}
        subheader={'Jae Bradley'}
        imageLocation={'../images/jae.png'}
        imageTitle={'Me!'}
        description={'blahblahblah'}
      />
      <InformationCard
        header={'About Me'}
        subheader={'Jae Bradley'}
        imageLocation={'../images/jae.png'}
        imageTitle={'Me!'}
        description={'blahblahblah'}
      />
    </main>
  </div>
);

export default withStyles(styles)(Home);
