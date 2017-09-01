import React, { Component } from 'react';
import { push as BurgerMenu } from 'react-burger-menu';
import { PageHeader, Image } from 'react-bootstrap';
import GoFileDirectory from 'react-icons/lib/go/file-directory';
import MdPerson from 'react-icons/lib/md/person';

import JaeImage from '../images/jae.png';

class Menu extends Component {
  render = () => (
    <BurgerMenu pageWrapId={this.props.pageWrapId} outerContainerId={this.props.outerContainerId}>
      <PageHeader>
        <Image src={JaeImage} circle className="about-image"/>
      </PageHeader>
      <div>
        <MdPerson className="menu-icon"/><a id="about" className="menu-item" href="/about">About</a>
      </div>
      <div>
        <GoFileDirectory className="menu-icon"/><a id="projects" className="menu-item" href="/projects">Projects</a>
      </div>
    </BurgerMenu>
  );
}

export default Menu;
