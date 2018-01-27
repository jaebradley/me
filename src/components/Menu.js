import React from 'react';
import { push as BurgerMenu } from 'react-burger-menu';
import { PageHeader } from 'react-bootstrap';
import GoFileDirectory from 'react-icons/lib/go/file-directory';
import MdPerson from 'react-icons/lib/md/person';

import ProfilePicture from './ProfilePicture';

const Menu = ({ pageWrapId, outerContainerId }) => (
  <BurgerMenu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
    <PageHeader>
      <ProfilePicture />
    </PageHeader>
    <div>
      <MdPerson className="menu-icon"/><a id="about" className="menu-item" href="/about">About</a>
    </div>
    <div>
      <GoFileDirectory className="menu-icon"/><a id="projects" className="menu-item" href="/projects">Projects</a>
    </div>
  </BurgerMenu>
);

export default Menu;
