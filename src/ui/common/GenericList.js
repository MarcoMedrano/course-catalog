import Enumerable from 'linq/linq'
import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

/**
 * A High Order Component to List items described by keys in props.
 */
@autobind
export default class GenericList extends Component {

    constructor() {
        super();
    }

    renderHeader() {
        const headArray = Enumerable.from(this.props.header)
            .select((h, i) => <th key={i}>{h}</th>)
            .toArray();
        return <thead><tr>{headArray}</tr></thead>;
    }

    renderTableRow(item, index){
        const toTdArray = item => Enumerable.from(this.props.keys)
                                            .select((k, j)=><td key={j}>{item[k]}</td> )
                                            .toArray();

        return <TableRow  key={index}>{toTdArray(item)}</TableRow>;
    }
    

    renderBody() {
        const rows = Enumerable.from(this.props.list)
                               .select(this.renderTableRow)
                               .toArray();

        return <tbody>{rows}</tbody>;
    }

    render() {
        return (
            <Table scrollable={false} selectable={true} onSelect={i => console.info('Selected ' + i)}>
                {this.renderHeader()}
                {this.renderBody()}
            </Table>
        );
    }
}