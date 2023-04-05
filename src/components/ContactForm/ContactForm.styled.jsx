import styled from '@emotion/styled'
import {Form} from 'formik';

export const LabelText = styled.div`
    font-size: 20px;
   
    
    /* margin-top: 10px;
    margin-bottom:5px; */

`

export const ButtonForm = styled.button`
    display: block;
    background-color: #fff;
    border: 1px grey solid;
    border-radius: 4px;
    padding: 5px;

    :hover {
        background-color: #337ff8;
        color: #fff;
    }
    /* margin-top: 20px; */
`

export const Label = styled.label`
    /* font-size: 20px; */
    display: block;
    margin-bottom: 20px;
`
export const FormComponent = styled(Form)`
    border: black 1px solid;
    padding: 20px;
    width: 300px;
`


// border: black 1px solid;
//     padding: 20px;