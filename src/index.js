import 'babel-polyfill';
import 'grommet/grommet.min.css';

import Enumerable from 'linq/linq'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import CatalogIcon from 'grommet/components/icons/base/CatalogOption';
import LogoutIcon from 'grommet/components/icons/base/Power';

import Dal from './dal/Dal';

import CoursePanel from './ui/courses/CoursePanel';

class MainApp extends Component {

  constructor() {
    super();
    
    Dal.setType("demo");
    this.state = { mainPanel: <CoursePanel /> };
  }

  renderMainPanel() {
    if (this.state.mainPanel)
      return this.state.mainPanel;
    else
      return "Main Content here +";
  }

  render() {
    try {
      return (
        <App centered={false}>
          <Box direction='row' justify='between' align='center' alignContent='center' colorIndex='brand' pad={{ horizontal: 'small' }}>
            <Header >
              <Title>
                <CatalogIcon size='medium' />
                Course Catalog
                  </Title>
            </Header>
            <Box direction='row' pad={{ between: 'medium' }}>
              <LogoutIcon size='small' />
            </Box>
          </Box>
          <Split separator={true} flex='right'>
            <Box justify='start' align='start' full='vertical' pad='small' basis='1/4' >
              {/*<MainMenu onMenuClick={p => this.setState({mainPanel:p})}/>*/}
            </Box>
            <Box justify='center' align='center' pad='small' basis='3/4'>
              {this.renderMainPanel()}
            </Box>
          </Split>
        </App>
      );
    }
    catch (e) {
      console.error(`${this.constructor.name}.render `, e);
    }
  }
}

var element = document.getElementById('content');
ReactDOM.render(React.createElement(MainApp), element);