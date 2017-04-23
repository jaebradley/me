import React, { Component } from 'react'

class ContactIcon extends Component {
  render = () => (
    <a
      target="_blank"
      href={this.props.href}
      className={"contact-icon"}>
      <img
        src={this.props.src}
        alt={this.props.alt}
      />
    </a>
  );
}

export default ContactIcon;
