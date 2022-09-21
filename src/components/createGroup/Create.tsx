import { ButtonBase, FormControl, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GroupDataService from '../../services/GroupDataService';

export const Create = () => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const navigate = useNavigate();

    function handleSubmit(event: any) {
        event.preventDefault();

        const contact = {name, description};

        GroupDataService.create(contact)
            .then((response: any) => {
                setName(contact.name)
                setDescription(contact.description)
            })
            .catch((e: Error) => {
                console.log(e);
            });

        navigate('/');

        // setModalShow(false);
    }
  return (
    <div>
        

        <form style={{textAlign: 'left'}} onSubmit={handleSubmit}>
            <h3>Agregar Contacto</h3>
            <FormControl>
                <InputLabel>
                    Nombre
                </InputLabel>
                <Input id="nombre" value={name} type="text" className='name' onChange={(e: any) => setName(e.target.value)} />
            </FormControl>

            <FormControl>
                <InputLabel>
                    Descripcion
                </InputLabel>
                <Input id="nombre" value={description} type="text" className='description' onChange={(e: any) => setDescription(e.target.value)} />
            </FormControl>
            <ButtonBase>Crear Grupo</ButtonBase>
        </form>
    </div>
  )
}
