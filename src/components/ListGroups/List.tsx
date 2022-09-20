// import { Card, CardContent, Typography } from '@mui/material'
import { Container } from '@mui/system'
// import { useEffect, useState } from 'react';
import Group from '../../interfaces/Group.type';
import GroupDataService from '../../services/GroupDataService'

import React, { Component } from 'react'
import { Box, Button, Card, CardContent, Grid } from '@mui/material';
import NavBar from '../Menu/NavBar';
type Props = {};


// type T = keyof Group;
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
                    groups: response.data.groups
                });
                console.log(this.state.groups);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }
  render() {
    const { groups } = this.state;
    return (
        <div>
            <Container>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap-reverse',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                maxWidth: 300,
                borderRadius: 1,
                }}
            >
                {
                        // [groups].map((object, index) => {
                        //   console.log(object[index]);
                        // }),
                //    groups.forEach((key: number, index) => (
                //      console.log(groups)
                //    ))

                groups.map((item: Group) => {
                    return (
                       <Box sx={{
                        p: 1,
                        m: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                        border: '1px solid',
                        borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                       }}>
                            <div>
                                {item.name}<br />
                                {item.description}
                            </div>
                        </Box>
                      )
                    }
                  )
                } 
            </Box>
            </Container>
        </div>
    )
  }
}
