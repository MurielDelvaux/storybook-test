import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './forms.css';
export const Forms = ({type, label,...props}) => {
    const input=['Nome','Sobrenome','Email','Endereço']
    return (
        <form >
            {input.map((value, i)=>
            
             <Input label={value} size='normal' onBlur={(e)=>console.log(e.target.value)}/> 
            )}
            <Button primary={true} label='submit' style={{marginTop:'1em'}}/>
            
           
        </form>
    );
};
