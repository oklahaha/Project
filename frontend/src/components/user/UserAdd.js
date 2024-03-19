import React, { useState } from "react";
import 'react-bootstrap';
import '../../css/App.css';


export default function UserAdd() {
    
    const [user, setUser] = useState({userName: '', password: '', age: '', email: '', tel: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/user/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => console.log('User Created:', data))
        .catch(error => console.error('Error Creating user:', error));
    };

    const handleChange = (e) => {
        const {name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
        console.log(e.target);
    }

    // const handleChange = (e) => setUser(e.target.value);

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" value={user.userName} onChange={handleChange} placeholder="User Name" />
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password " />
                <input type="password" name="comfirmPassword" value="" onChange={handleChange} placeholder="Comfirm Password" />
                <input type="age" name="age" value={user.age} onChange={handleChange} placeholder="Age" />
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
                <input type="text" name="tel" value={user.tel} onChange={handleChange} placeholder="Tel" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}