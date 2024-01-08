import { useState } from "react";

const NewMadLibForm = ({ addMadLib }) => {
    const INITIAL_STATE = {
        noun1: '',
        noun2: '',
        adjective:'',
        color: '',
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        formData.noun1 &&
        formData.noun2 &&
        formData.adjective &&
        formData.color
      ) {
        addMadLib({ ...formData });
        setFormData(INITIAL_STATE);
      } else {
        alert("Please fill in all fields to create the MadLib.");
      }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="noun1">noun1: </label>
            <input 
                type="text" 
                id="noun1"
                name="noun1"
                value={formData.noun1}
                onChange={ handleChange }
            />

            <label htmlFor="noun2">noun2: </label>
            <input 
                type="text" 
                id="noun2"
                name="noun2"
                value={formData.noun2}
                onChange={ handleChange }
            />

            <label htmlFor="adjective">adjective: </label>
            <input 
                type="text" 
                id="adjective"
                name="adjective"
                value={formData.adjective}
                onChange={ handleChange }
            />

            <label htmlFor="color">color: </label>
            <input 
                type="text" 
                id="color"
                name="color"
                value={formData.color}
                onChange={ handleChange }
            />

            <button type="submit">Read your MadLib!</button>
        </form>
    )
}

export default NewMadLibForm;