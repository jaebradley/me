import React, { Component } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu'

class Menu extends Component {
  render = () => (
    <BurgerMenu>
      <a id="projects" className="menu-item" href="/projects">Projects</a>
      <a id="about" className="menu-item" href="/about">About</a>
    </BurgerMenu>
  );
}

export default Menu;
