import React from 'react';
import { push as BurgerMenu } from 'react-burger-menu';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';
import UserAvatar from 'react-user-avatar';
import SocialMediaBar from 'react-social-media-bar';

const MINIMAL_ICONS = [
  {
    media: 'instagram',
    link: 'https://instagram.com/rahrang'
  },
  {
    media: 'github',
    link: 'https://github.com/rahrang'
  },
  {
    media: 'linkedin',
    link: 'https://linkedin.com/in/rahrang'
  }
];


const Menu = ({ pageWrapId, outerContainerId }) => (
  <BurgerMenu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
      <UserAvatar
        className='menu-avatar'
        size='70'
        name='Jae Bradley'
        src='https://avatars0.githubusercontent.com/u/8136030?s=460&v=4'
      />
    <ListGroup className='about-description'>
      <ListGroupItem color='success'>
        <ListGroupItemText>
          Boston-based backend software engineer.
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem color='info'>
        <ListGroupItemText>
          Avid sports fan (particularly the NBA).
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem color='warning'>
        <ListGroupItemText>
          Once ate eleven soups at Olive Garden.
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
    <SocialMediaBar
      className='social-media-bar'
      bgColor={'#289089'}
      icons={MINIMAL_ICONS}
      iconOpacity={0.75}
      iconSize={'1.5em'}
      hoverColor={'#895FAD'}
      hoverOpacity={0.9}
      margin={{
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '12px'
      }}
      padding={{
        top: '3px',
        left: '2px',
        right: '2px',
        bottom: '3px'
      }}
    />
  </BurgerMenu>
);

export default Menu;
