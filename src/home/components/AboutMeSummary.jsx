import React from 'react';

import {
  Card,
  CardContent,
  Divider,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
} from '@material-ui/core/';
import {
  LocationOn,
  LaptopMac,
  Favorite,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import ContactBar from './ContactBar';

const styles = () => ({
  root: {
    fontWeight: 100,
  },
  divider: {
    margin: '10px 0px',
  },
  locationAvatar: {
    background: 'aquamarine',
  },
  locationIcon: {
    color: '#3f51b5',
  },
  workAvatar: {
    background: 'violet',
  },
  workIcon: {
    color: 'azure',
  },
  favoriteAvatar: {
    background: 'navajowhite',
  },
  favoriteIcon: {
    color: 'crimson',
  },
  contact: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

const AboutMeSummary = ({ classes }) => (
  <Card className={classes.root}>
    <CardContent>
      <Typography
        align="center"
        variant="title"
      >
        👋 Hi, I'm Jae!
      </Typography>
      <Divider className={classes.divider} />
      <List>
        <ListItem>
          <Avatar className={classes.locationAvatar}>
            <LocationOn className={classes.locationIcon} />
          </Avatar>
          <ListItemText>
            I'm a software engineer based out of San Francisco 🌉
          </ListItemText>
        </ListItem>
        <Divider
          inset
          component="li"
        />
        <ListItem>
          <Avatar className={classes.workAvatar}>
            <LaptopMac className={classes.workIcon} />
          </Avatar>
          <ListItemText>
            {`
              Though I started out on the backend, I've been
              gravitating towards the frontend and work as a full-stack
              engineer
            `}
          </ListItemText>
        </ListItem>
        <Divider
          inset
          component="li"
        />
        <ListItem>
          <Avatar className={classes.favoriteAvatar}>
            <Favorite className={classes.favoriteIcon} />
          </Avatar>
          <ListItemText>
            <List>
              <ListItem>
                🏕
              </ListItem>
              <ListItem>
                ⚽️ /  🏀
              </ListItem>
              <ListItem>
                🍳 (I'm on a quest to make the perfect BLT 🥪)
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
        <Divider
          inset
          component="li"
        />
        <ListItem className={classes.contact} >
          <ContactBar />
        </ListItem>
      </List>
    </CardContent>
  </Card>
);

export default withStyles(styles)(AboutMeSummary);
