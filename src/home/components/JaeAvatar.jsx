import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10,
  },
};

const JaeAvatar = ({ classes }) =>  <Avatar alt="Jae Bradley" src="../../images/jae.png" className={classes.avatar} />;

JaeAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JaeAvatar);
