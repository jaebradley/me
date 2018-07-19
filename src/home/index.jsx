import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {
  Drawer,
  Divider,
  CardMedia,
} from '@material-ui/core';
import {
  Email as EmailIcon,
} from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import InformationCard from './components/InformationCard';
import MenuAppBar from './components/MenuAppBar';
import CenteredTabs from './components/CenteredTabs';

const styles = () => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 10,
    width: '70%',
    margin: '0 auto',
  },
  fullTextRow: {
    margin: '0 auto',
    paddingTop: 30,
    width: '70%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  image: {
    margin: '0 auto',
    marginTop: 30,
    width: '33%'
  },
});

const Home = ({ classes }) => (
  <div>
    <MenuAppBar />
    <CenteredTabs />
    <main className={classes.content}>
    <Card className={classes.image}>
      <CardMedia className={classes.media} image={'../images/jae.png'} />
    </Card>
    <div className={classes.fullTextRow}>
      <Card>
        <CardContent>
          <Typography>
            Hi, I'm Jae.
            I'm a software engineer based out of San Francisco.
            Though I started as a backend Java engineer, I've slowly been
            gravitating towards the frontend and currently work as a full-stack
            engineer at a company called Groove.
          </Typography>
        </CardContent>
      </Card>
    </div>
    </main>
  </div>
);

export default withStyles(styles)(Home);
