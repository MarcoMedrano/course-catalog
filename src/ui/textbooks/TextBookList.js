import React, { Component } from 'react';

import GenericList from './../common/GenericList';

export default class TextBookList extends Component {

    constructor() {
        super();
    }

    render(){
      return <GenericList header={['Author', 'Title']} keys={['author', 'title']} {...this.props}/>
    }
}