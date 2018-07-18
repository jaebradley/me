import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {
  deepPurple,
} from '@material-ui/core/colors';

const styles = {
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
};

const JAvatar = ({ classes }) =>  <Avatar alt="Jae Bradley" className={classes.avatar}>J</Avatar>;

JAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JAvatar);
