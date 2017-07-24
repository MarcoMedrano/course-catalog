import React, { Component } from 'react';

import GenericList from './../common/GenericList';
import TextBookForm from './TextBookForm';

export default class TextBookList extends Component {

    constructor() {
        super();
    }

    render(){
      return <GenericList header={['Author', 'Title']} keys={['author', 'title']} EditForm={TextBookForm} {...this.props}/>
    }
}