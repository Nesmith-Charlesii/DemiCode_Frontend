import {useState} from 'react';

const CustomForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState({});
    
    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
    }

    const handleFileChange = (event) => {
        event.persist();
        setFile({file: event.target.files[0].name}, () => console.log('FILE CHANGE', file))
    }

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }
        callback()
    }

    return {
        handleChange,
        handleSubmit,
        handleFileChange,
        inputs
    }
}

export default CustomForm;