import { useState } from 'react';
import React from 'react';
import GlobalStyles from './styles/Global';


const Form = ({movieSearch}) => {

    const [form, setform] = useState({
        searchTerm: ''
    });

    const handleChange = (e) => {
        setform({ 
            ...form, 
            // [e.target.name] : e.target.value 
            searchTerm : e.target.value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        movieSearch(form.searchTerm);
    };

  return (
        <div>
            <div><span>IMDb</span></div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={form.searchTerm}
                />
                <input type='submit' value='Search' />
            </form>
        </div>
  );
};

export default Form;