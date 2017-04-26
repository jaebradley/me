import React, { Component } from 'react';
import { push as BurgerMenu } from 'react-burger-menu'

class Menu extends Component {
  render = () => (
    <BurgerMenu pageWrapId={this.props.pageWrapId} outerContainerId={this.props.outerContainerId}>
      <a id="projects" className="menu-item" href="/projects">Projects</a>
      <a id="about" className="menu-item" href="/about">About</a>
    </BurgerMenu>
  );
}

export default Menu;
