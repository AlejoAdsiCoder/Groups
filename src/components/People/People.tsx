import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Group from '../../interfaces/Group.type';
import GroupDataService from '../../services/GroupDataService';
import ListGroup from '../ListGroups/ListGroup';

export const People = () => {
    const [people, setPeople] = useState([]);

    const { num } = useParams();

    const listGroups = () => {

        GroupDataService.getAll()
            .then((response: any) => {
                setPeople(
                    response.data.groups
                );
                const index = people.findIndex((per: Group) => per?.id === num)
                console.log(num)
                console.log(people.id);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    useEffect(() => {
        listGroups()
        
    }, [])

    
    
  return (
    <div>
        {

        }
    </div>
  )
}
