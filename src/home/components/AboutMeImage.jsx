import React from 'react';

import {
  Card,
  CardMedia,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
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

const AboutMeImage = ({ classes }) => (
  <Card className={classes.image}>
    <CardMedia
      className={classes.media}
      image={'../images/about-me.jpg'}
    />
  </Card>
);

export default withStyles(styles)(AboutMeImage);
