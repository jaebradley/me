import React from 'react';
import { Media } from 'reactstrap';

import image from '../images/jae.png';

const ProfilePicture = () => (
  <Media
    circle
    className='about-image'
    src={image}
  />
);

export default ProfilePicture;
