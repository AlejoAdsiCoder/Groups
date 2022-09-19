import { Card, CardContent, Typography } from '@mui/material'
import { Container } from '@mui/system'
// import { useEffect, useState } from 'react';
import Group from '../../interfaces/Group.type';
import GroupDataService from '../../services/GroupDataService'

import React, { Component } from 'react'
type Props = {};


type T = keyof Group;
type State = {
    groups: Array<Group>
}

export default class List extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.listGroups = this.listGroups.bind(this);

        this.state = {
            groups: [],
        };
    }

    componentDidMount() {
        this.listGroups();
    }

    listGroups() {
        GroupDataService.getAll()
            .then((response: any) => {
                this.setState({
                    groups: response.data
                });
                console.log(this.state.groups);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }
  render() {
    const { groups } = this.state;
    console.log(groups);
    return (
        <div>
            <Container>
                <ul>
                {
                    Object.values(groups).map((group: Group, index) => (
                        <li>{group[index].name}</li>
                    ))
                //    groups.forEach((key: number, index) => (
                //      console.log(groups)
                //    ))
                }
                </ul>
                    
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
                
            </Container>
        </div>
    )
  }
}
