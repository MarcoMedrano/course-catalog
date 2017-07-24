import Enumerable from 'linq/linq'
import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Toast from 'grommet/components/Toast';

import OkIcon from 'grommet/components/icons/base/Checkmark';
import CancelIcon from 'grommet/components/icons/base/Close';

import Dal from './../../dal/Dal';
import TextBookList from './../textbooks/TextBookList';
// Autobind is not efficient in all cases, I am using it just to demostrate I use some decorators
@autobind
export default class Course extends Component {

  constructor(props) {
    super(props);

    // Just initial fake data.
    this.state = {dto:{ "id": "", "name": "", "description": "", "textbooks": [] }, backupDto:null, message:null};
  }

  componentDidMount() {
    console.log("Component mounted, getting dto from DAL");
    this.getCourseFromDal();
  }


  getCourseFromDal() {
    Dal.Courses.getAll().then(courses => {
      const newDto = $.extend(true, {}, courses[0]);
      this.setState({ dto:newDto, backupDto: courses[0]});
    });
  }

  setDtoState(propertyName, e) {
    this.state.dto[propertyName] = e.target.value;
    this.setState({ dto: this.state.dto });
  }

  Save() {
    console.debug('Saving changes');
    Dal.Courses.update(this.state.dto).then( () => this.setState({message:'Course updated'}));
  }

  SaveTextBook() {
    //TODO should go by its own DAL but as there is not enough time neither was a requirement
    const courseToSave = $.extend(true, {}, this.state.backupDto);
    courseToSave.textbooks =  this.state.dto.textbooks;
    Dal.Courses.update(courseToSave).then( () => this.setState({message:'Textbook updated'}));
  }

  DiscardTextBook() {
    const courseToDiscard = $.extend(true, {}, this.state.dto);
    courseToDiscard.textbooks =  this.state.backupDto.textbooks;
    this.setState({dto:courseToDiscard})
  }

  Discard() {
    console.debug('Discarting changes');
    this.getCourseFromDal();
  }

  renderMessage(message){
    if(this.state.message)
      return <Toast status='ok' onClose={()=>this.setState({message:null})}>
              {this.state.message}
             </Toast>;
  }

  render() {
    return <Form compact={false}>
      {this.renderMessage()}
      <Header><Heading tag='h3' >Course : {this.state.dto.name}</Heading></Header>
      <FormFields>
        <FormField label='Name' >
          <TextInput value={this.state.dto.name} onChange={e => this.setDtoState('name', e)} />
        </FormField>
        <FormField label='Description'>
          <textarea value={this.state.dto.description} onChange={e => this.setDtoState('description', e)} />
        </FormField>
      </FormFields>
      <TextBookList list={this.state.dto.textbooks} onSave={this.SaveTextBook} onDiscard={this.DiscardTextBook} />
      <Footer pad={{ vertical: 'medium', between: 'small' }} justify='center'>
        <Button icon={<OkIcon type='logo' />} label='Save' primary={true} onClick={this.Save} />
        <Button icon={<CancelIcon />} label='Discard' onClick={this.Discard} />
      </Footer>
    </Form>;
  }
}