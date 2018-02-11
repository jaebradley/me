import React from 'react';
import { push as BurgerMenu } from 'react-burger-menu';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';
import UserAvatar from 'react-user-avatar';
import { ContactInformation, Service, SERVICE_TYPE, Email, FONT_AWESOME_SIZE } from 'react-contact-information';

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
    <footer className='menu-footer'>
      <ContactInformation className='menu-contact-information' size={FONT_AWESOME_SIZE.ONE} rowLength={4}>
        <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB} />
        <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.LINKEDIN} />
        <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
        <Email to={'jae.bradley@gmail'} />
      </ContactInformation>
    </footer>
  </BurgerMenu>
);

export default Menu;
