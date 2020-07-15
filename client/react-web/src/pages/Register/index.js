import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

import api from '../../services/api'
import Header from '../Header'

import './style.css';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [created_at, setCreated_at] = useState(0);

    const history = useHistory();

    //Functon do register
    async function handleRegister(e){
        e.preventDefault()

        const data = {
            name,
            email,
            created_at
        };

       if(data.name !== "" && data.email !== ""){
        try{
            await api.post('register', data);
            alert(`Registered sucessful!`)
            history.push('/')
        }catch(err){
            alert(`Error, try again!`)
        }
       }else{
        alert(`Missing name or email!`)
       }

    }

    return(
        <div >
            <Header />
            <div className="register-container">
                <h1>Register</h1>
                <div className="form-content">
                <form onSubmit={handleRegister}>
                    <label>Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} />
                    <label>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                    <label>Created</label>
                    <input type="number" value={created_at} onChange={e => setCreated_at(e.target.value)}/>

                    <button className="button" type="submit">Save</button>
                </form>
                </div>
            </div>
        </div>
    )
}