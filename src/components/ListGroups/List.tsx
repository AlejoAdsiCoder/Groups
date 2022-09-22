// import { Card, CardContent, Typography } from '@mui/material'
import { Container } from '@mui/system'
// import { useEffect, useState } from 'react';
import Group from '../../interfaces/Group.type';
import GroupDataService from '../../services/GroupDataService'

import React, { Component } from 'react'
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavBar from '../Menu/NavBar';
import { People } from '@mui/icons-material';
import { Link } from 'react-router-dom';
type Props = {};


// type T = keyof Group;
type State = {
    groups: Array<Group>
    people: any
}

export default class List extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.listGroups = this.listGroups.bind(this);

        this.state = {
            groups: [],
            people: []
        };
    }

    componentDidMount() {
        this.listGroups();
    }

    listGroups() {
        GroupDataService.getAll()
            .then((response: any) => {
                this.setState({
                    groups: response.data.groups,
                    people: response.data.groups[0].people
                });
                console.log(this.state.people);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }

    // listPeople() {
        
    //     for(const people of groups: Group) {
    //         const { name, active } = per;
    //         if (per.includes()) {

    //         }
    //     }
    // }
  render() {
    const { groups, people } = this.state;
    return (
        <div>
            <Container>
            <Grid container mt={2} spacing={3}>
                {
                        // [groups].map((object, index) => {
                        //   console.log(object[index]);
                        // }),
                //    groups.forEach((key: number, index) => (
                //      console.log(groups)
                //    ))

                groups.map((group: Group, index) => {
                    return (
                       <Grid item key={group.id} xs={12} md={6} lg={4}>
                            <Card>
                                <CardHeader
                                    action={
                                        <>
                                        <IconButton>
                                            <DeleteOutlined />
                                        </IconButton>
                                        <IconButton>
                                            <Link to={{ pathname: `/people/${group.id}` }}>
                                                <VisibilityIcon />
                                            </Link>
                                        </IconButton>
                                        </>
                                    }
                                    title={group.name}
                                    subheader={group.description}
                                >
                                    {/* <CardContent>
                                        <Typography variant="body2">
                                            <div>
                                                <div key={group.id}>{group.name}</div>
                                                
                                            </div>
                                            {group.people[index].name} 
                                        </Typography>
                                    </CardContent> */}
                                </CardHeader>
                            </Card>
                        </Grid>
                      )
                    }
                  )
                } 
            </Grid>
            </Container>
        </div>
    )
  }
}
