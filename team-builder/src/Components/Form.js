import React, { useState } from 'react';
import FormList from './FormList';

function Form(props) {
    const [newMember, setNewMember] = useState({
        memberName: '',
        email: '',
        role: ''
    })

    const handleChange = e => {
        setNewMember({
            ...newMember, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setMembers([...props.members, newMember])
        resetForm(e);
    }

    const resetForm = e => {
        e.preventDefault();
        setNewMember({
            memberName: '',
            email: '', 
            role: ''
        });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleChange}
                type='text'
                name='memeberName'
                id=''
                placeholder= 'First name Last name'
                value={newMember.memberName} />

                <input
                onChange={handleChange}
                type='text'
                name='email'
                id=''
                placeholder='Email address'
                value={newMember.email} />

                <input
                onChange={handleChange}
                type='text'
                name='role'
                id=''
                placeholder='Your Role'
                value={newMember.role} />

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Form