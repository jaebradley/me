import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import AboutMeSummary from './AboutMeSummary';
import AboutMeImage from './AboutMeImage';

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
});

const Content = ({ classes }) => (
  <main className={classes.content}>
    <AboutMeImage />
    <div className={classes.fullTextRow}>
      <AboutMeSummary />
    </div>
  </main>
);

export default withStyles(styles)(Content);
