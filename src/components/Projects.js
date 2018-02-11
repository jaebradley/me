import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CenteredPageHeader from './CenteredPageHeader';
import { GitHubProjects, GitHubRepository } from 'github-portfolio-component';
import { ContactInformation, Service, SERVICE_TYPE, Email, FONT_AWESOME_SIZE } from 'react-contact-information';

import Menu from './Menu';

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
            <GitHubRepository name='jaeurls' description='URL shortener that uses my first name as a prefix' />
            <GitHubRepository name='urban-dictionary-cli' description='CLI for Urban Dictionary definitions' />
            <GitHubRepository name='flix' description='CLI for movie and theather information' />
            <GitHubRepository name='rotten_tomatoes_cli' description='Search movies and TV shows on Rotten Tomatoes from the command line' />
            <GitHubRepository name='stock_ticker_identifier' description="GraphQL API that maps a company name to it's stock ticker" />
            <GitHubRepository name='github-portfolio-component' description='React component for showcasing GitHub projects' />
          </GitHubProjects>
          <footer className='footer'>
            <ContactInformation className='contact-information' size={FONT_AWESOME_SIZE.TWO} rowLength={4}>
              <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB} />
              <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.LINKEDIN} />
              <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
              <Email to={'jae.bradley@gmail'} />
            </ContactInformation>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Projects;
