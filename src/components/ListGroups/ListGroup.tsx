import { group } from 'console';
import { useEffect, useState } from 'react'
import Group from '../../interfaces/Group.type';
import GroupDataService from '../../services/GroupDataService';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4YTVlMTFiLWRiZDktNDBlZS1hZjA4LTMyYzBjMDBiYmM5ZiIsIm1haWwiOiJmcm9udC10ZXN0LTQzMUBmb3J0ZXhkZXNpZ24uY29tIiwibmFtZSI6IkRldmVsb3BlciIsIm9yZ2FuaXphdGlvbklkIjoiNWFkYTVmODQtOTY5ZC00NWIzLTg1OGMtZDQ5YjBmNDQ5ODA0IiwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE2NjMzNDMzMjAsImV4cCI6MTY2Mzk0ODEyMH0.09JRLe7Bj4Z8oFtR9PP1wOXp5duIIha1isW_Hd94zCA'

function ListGroup() {
    const [result, setResult] = useState<Group[]>([]);

    useEffect(() => {
        listGroups()
        // const api = async () => {
        //   await fetch("https://demo-api-work-test.herokuapp.com/group/", {
        //     method: "GET",
        //     headers: {
        //         'Authorization': `${token}`
        //     }
        //   }).then((data) => {
        //     console.log(data.json()); // JSON data parsed by `data.json()` call
        //   })
        //   .then(group => {
        //     console.log(group);
        //     });
        // //   const jsonData = await data.json();
        // //   setResult(jsonData.results);
        //   console.log(result)
        // };
    
        // api();
        
      });

      const listGroups = () => {
        GroupDataService.getAll()
            .then((response: any) => {
                setResult(response.data);
                console.log(result);
        })
        .catch((e: Error) => {
            console.log(e);
        });
      }
  return (
    <div>
        {result.map((value) => {
            return (
                <div>
                    <div>{value.name}</div>
                    <div>{value.description}</div>
                </div>
            )
        })}
    </div>
  )
}

export default ListGroup