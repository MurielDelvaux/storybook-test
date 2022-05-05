import React from 'react';

import {Input} from './Input';

export default{
    title:'Input',
    component: Input,

};

const Template = (args)=> <Input {...args} />

export const Normal = Template.bind({});

Normal.args={
    label:'Label'
}
