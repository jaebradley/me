import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
  Chip,
  Avatar,
} from '@material-ui/core/';
import FontAwesome from 'react-fontawesome';

const styles = {
  githubAvatar: {
    color: 'snow',
    background: '#050505',
  },
  github: {
    margin: 10,
    background: '#565656',
    color: 'snow',
    fontWeight: 500,
    '&:hover': {
      color: 'snow',
      background: '#727272',
    },
  },
  twitterAvatar: {
    color: 'snow',
    background: '#84c7ff',
  },
  twitter: {
    margin: 10,
    background: '#93cdff',
    color: 'snow',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#41b8f4',
    },
  },
  linkedinAvatar: {
    background: '#4143f4',
    color: 'snow',
  },
  linkedin: {
    margin: 10,
    background: '#417cf4',
    color: 'snow',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#419df4',
    },
  },
  emailAvatar: {
    color: 'snow',
    background: '#ff2a00'
  },
  email: {
    margin: 10,
    background: '#ff5e5e',
    color: 'snow',
    fontWeight: 500,
    '&:hover': {
      background: '#ff7777',
    },
  },
}

const ContactBar = ({ classes }) => (
  <div>
    <Chip
      className={classes.email}
      avatar={
        <Avatar className={classes.emailAvatar} >
          <FontAwesome name="envelope" />
        </Avatar>
      }
      label="jae.b.bradley@gmail.com"
      onClick={() => window.localStorage.href = 'mailto:jae.b.bradley@gmail.com'}
    />
    <Chip
      className={classes.linkedin}
      avatar={
        <Avatar className={classes.linkedinAvatar} >
          <FontAwesome name="linkedin" />
        </Avatar>
      }
      label="in/jaebradley"
      onClick={() => window.location.href = 'https://www.linkedin.com/in/jaebradley'}
    />
    <Chip
      className={classes.github}
      avatar={
        <Avatar className={classes.githubAvatar}>
          <FontAwesome name="github" />
        </Avatar>
      }
      label="@jaebradley"
      onClick={() => window.location.href = 'https://www.github.com/jaebradley'}
    />
    <Chip
      className={classes.twitter}
      avatar={
        <Avatar className={classes.twitterAvatar}>
          <FontAwesome name="twitter" />
        </Avatar>
      }
      label="@jaebradley"
      onClick={() => window.location.href = 'https://twitter.com/jaebradley'}
    />
  </div>
);

export default withStyles(styles)(ContactBar);
