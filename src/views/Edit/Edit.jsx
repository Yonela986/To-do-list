import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout'
import { TextField, Button } from '@material-ui/core'
//import {useParams} from 'react-router-dom';


const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`
const StyledButton = styled(Button)`
   &&{
      margin-top: 1=rem;
   }
`
const Edit = (propos) => {
    const { onSave, initialName, taskId } = propos;
  //  const { taskId } = useParams();

    const [name, setName] = useState(initialName || "");

    const handleTextChange = (event) => {
        const { value } = event.target;
        setName(value);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(taskId, name);
        console.log(taskId + " svbhdv " +name)
    };

    return (
    
      <Layout activePage="edit">

          <Form onSubmit={handleSubmit}>

           <TextField onChange={handleTextChange} label="Task Name" fullWidth variant="outlined" value={name}/>
           
           <StyledButton href="#/" type="submit" variant="outlined" size="large"> Cancel</StyledButton>

           <StyledButton type="submit" variant="contained" color="primary" size="large" display={name.trim() === ''}>Save Changes</StyledButton>

          </Form>

       </Layout>
    );
};


export default Edit;