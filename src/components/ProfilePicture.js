import React from 'react';
import { Image } from 'react-bootstrap';

import image from '../images/jae.png';

const ProfilePicture = () => (
  <Image
    circle
    className='about-image'
    src={image}
  />
);

export default ProfilePicture;
