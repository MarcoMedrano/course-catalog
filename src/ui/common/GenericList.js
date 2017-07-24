import Enumerable from 'linq/linq'
import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Button from 'grommet/components/Button';

import EditIcon from 'grommet/components/icons/base/Edit';

/**
 * A High Order Component to List items described by keys in props.
 */
@autobind
export default class GenericList extends Component {

    constructor() {
        super();
        this.state = {selectedItem:null, showEditForm:false};
    }

    Save(){
        this.setState({showEditForm:false});
        this.props.onSave();
    }

    Discard(){
        this.setState({showEditForm:false});
        this.props.onDiscard();
    }

    renderHeader() {
        const headArray = Enumerable.from(this.props.header)
            .select((h, i) => <th key={i}>{h}</th>)
            .toArray();
        headArray.push(<th key={headArray.length+1} />);
        return <thead><tr >{headArray}</tr></thead>;
    }

    renderBody() {
        console.debug('Redering Boxy');
        const rows = Enumerable.from(this.props.list)
                               .select(this.renderTableRow)
                               .toArray();

        return <tbody>{rows}</tbody>;
    }

    renderTableRow(item, index){
        const toTdArray = item => Enumerable.from(this.props.keys)
                                            .select((k, j)=><td key={j}>{item[k]}</td> )
                                            .toArray();
        const tdArray = toTdArray(item);
        tdArray.push(<td key={tdArray.length+1}>
                            <EditIcon size='small' colorIndex='brand' onClick = {e => this.setState({showEditForm:true})}/>
                    </td>);

        return <TableRow  key={index}>{tdArray}</TableRow>;
    }
    
    renderEditForm() {
        if(this.state.showEditForm)
        return this.props.EditForm.fromDto(this.state.selectedItem, this.Save, this.Discard);
    }

    render() {
        return <Box>
                <Table scrollable={false} selectable={true} onSelect={i => this.state.selectedItem = this.props.list[i]}>
                    {this.renderHeader()}
                    {this.renderBody()}
                </Table>
                {this.renderEditForm()}
               </Box>;
    }
}