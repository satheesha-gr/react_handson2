import React, { useState } from 'react'

function FormComponent() {
  const [displayData, setDisplayData] = useState([]);
  const [formData,setFormData] = useState({
    name : "",
    department : "",
    rating : "",
  });

  const appendData = () => {
    setDisplayData([
      ...displayData,
      <div className="display-data">
        Name: {formData.name} | Department: {formData.department} | Rating: {formData.rating}
      </div>
    ]);

    setFormData({
      name: '',
      department: '',
      rating: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };


  return (
    <div id="container">
      <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Department:{" "}
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating:{" "}
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={appendData} />
      </form>
    
      <div id="display-form-data">{displayData}</div>
    </div>
  )
}

export default FormComponent