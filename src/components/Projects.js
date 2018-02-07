import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CenteredPageHeader from './CenteredPageHeader';
import { GitHubProjects, GitHubRepository } from 'github-portfolio-component';
import ContactBar from './ContactBar';
import Menu from './Menu';
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

class Projects extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Container>
          <CenteredPageHeader header={'Projects'} />
          <GitHubProjects owner='jaebradley'>
            <GitHubRepository name='uber-cli' description='CLI for Uber price / time estimates' />
            <GitHubRepository name='nba-cli' description='CLI for NBA scores and schedule' />
            <GitHubRepository name='atomify' description='Control Spotify from Atom text editor' />
            <GitHubRepository name='getmethefuckthere' description='Google Maps CLI' />
            <GitHubRepository name='http-status-identifier-cli' description='CLI for HTTP status meanings' />
            <GitHubRepository name='github-searcher-cli' description='CLI for searching GitHub' />
          </GitHubProjects>
        </Container>
      </div>
    );
  }
}

export default Projects;
