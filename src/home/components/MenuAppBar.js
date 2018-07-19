import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
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

import JAvatar from './JAvatar';

const styles = {
  root: {
    position: 'sticky',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
  }
};

@withStyles(styles)
class MenuAppBar extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="absolute" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <JAvatar />
        </Toolbar>
      </AppBar>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MenuAppBar;
