import Enumerable from 'linq/linq'
import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';

import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

import Button from 'grommet/components/Button';

import OkIcon from 'grommet/components/icons/base/Checkmark';
import CancelIcon from 'grommet/components/icons/base/Close';


export default class TextBookForm extends Component {

  constructor(props) {
    super(props);

    this.state = { dto: this.props.dto }
  }

  setDtoState(propertyName, e) {
    this.state.dto[propertyName] = e.target.value;
    this.setState({ dto: this.state.dto });
  }

  render() {
    return (
      <Layer flush={false} closer={true} onClose={this.props.onDiscard}>
        <Form compact={false}>
          <Header><Heading tag='h3' >Textbook : {this.state.dto.title}</Heading></Header>
          <FormFields>
            <FormField label='Author'>
              <TextInput value={this.state.dto.author} onChange={e => this.setDtoState('author', e)} />
            </FormField>
            <FormField label='Title' >
              <TextInput value={this.state.dto.title} onChange={e => this.setDtoState('title', e)} />
            </FormField>
          </FormFields>
          <Footer pad={{ vertical: 'medium', between: 'small' }} justify='center'>
            <Button icon={<OkIcon type='logo' />} label='Save' primary={true} onClick={this.props.onSave} />
            <Button icon={<CancelIcon />} label='Discard' onClick={this.props.onDiscard} />
          </Footer>
        </Form>
      </Layer>
    );
  }

  static fromDto(dto, saveCallBack, discardCallback) {
    return <TextBookForm dto={dto} onSave={saveCallBack} onDiscard={discardCallback} />
  }
}
