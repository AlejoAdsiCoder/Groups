import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { group } from 'console';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import createGroup from '../../interfaces/createGroup.type';
// import {createGroup} from '../../interfaces/createGroup.type';
import Group from '../../interfaces/Group.type';
import GroupDataService from '../../services/GroupDataService';
import ListGroup from '../ListGroups/ListGroup';

export const People = () => {
    const [people, setPeople] = useState<string[]>([]);

    const { num } = useParams();

    const listGroups = useCallback(() => {
        GroupDataService.getAll()
            .then((response: any) => {
                
                const groups:Array<Group> = response.data.groups
                const index = groups.map((object:Group) => object?.id).indexOf(num);
                const indexFound:any = groups[index].people
                // const index = people.map((per:Group) => {
                //     fin dIndex((per: Group) => per?.id === num)}
                //     )
                // return indexFound   
                
                
                console.log(indexFound);
            })
            .catch((e: Error) => {
                console.log(e);
            });
            // setPeople(groups)
            // console.log(people)
    }, [num])

    useEffect(() => {
        

        listGroups()

        // setPeople(listGroups)
        
    }, [listGroups]);
    
  return (
    <div>
    </div>
  )
}
