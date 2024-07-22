"use client";
import React, {createElement} from 'react';

function FormValidation() {
    const [object, setObject] = React.useState({
        name:"",
        password:""
    });
    const onChangeHandler = event => {
        const {name, password, value} = event.target;
            setObject(prevState => ({
                ...prevState,
                [name]: value,
                [password]: value,
            }));
    }
    const handleSubmit = () => {
        if(object.name.length<6 || object.password.length<6 ){
            alert("ERROR")
        }
    }
    return (
        <div>
            <p>This is {object.name}</p>
            <p>This is {object.password}</p>
            <input onChange={onChangeHandler} type={"text"} name="name" value={object.name}/>
            <input onChange={onChangeHandler} type={"text"} name="password" value={object.password}/>
            <button onClick={handleSubmit}>SAVE</button>
        </div>
    );
}

export default FormValidation;