import React, { useState } from 'react';
import Field from './Field';
import './DynamicForm.css';

const DynamicForm = () => {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  const addField = (type) => {
    setFields([...fields, { type, id: Date.now() }]);
  };

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
    setFormData(prevFormData => {
      const updatedFormData = { ...prevFormData };
      delete updatedFormData[id];
      return updatedFormData;
    });
  };

  const handleInputChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="dynamic-form">
      <div className="controls">
        <button onClick={() => addField('text')}>Add Text Input</button>
        <button onClick={() => addField('checkbox')}>Add Checkbox</button>
        <button onClick={() => addField('radio')}>Add Radio Button</button>
      </div>
      <form onSubmit={handleSubmit}>
        {fields.map(field => (
          <Field
            key={field.id}
            type={field.type}
            id={field.id}
            handleInputChange={handleInputChange}
            removeField={removeField}
          />
        ))}
        
      </form>
    </div>
  );
};

export default DynamicForm;
