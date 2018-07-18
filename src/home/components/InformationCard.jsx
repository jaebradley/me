import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from '@material-ui/core/styles';
import classnames from 'classnames';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
  MoreVert as MoreVertIcon,
} from '@material-ui/icons';
import red from '@material-ui/core/colors/red';

import JaeAvatar from './JaeAvatar';

const styles = theme => ({
  card: {
    width: '50%',
    margin: '0 auto',
    marginTop: 10,
    marginBottom: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

@withStyles(styles)
class InformationCard extends React.Component {
  state = {};

  render() {
    const {
      classes,
      header,
      subheader,
      imageLocation,
      imageTitle,
      description
    } = this.props;

    return (
      <Card className={classes.card}>
          <CardHeader
            avatar={<JaeAvatar />}
            title={header}
            subheader={subheader}
          />
          <CardMedia
            className={classes.media}
            image={imageLocation}
            title={imageTitle}
          />
          <CardContent>
            <Typography component="p">
              { description }
            </Typography>
          </CardContent>
        </Card>
    );
  }
}

InformationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InformationCard;
