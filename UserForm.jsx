import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialHandle, setSocialHandle] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name",name);
    formData.append("socialHandle",socialHandle);
    for(let i=0;i<images.length;i++){
      formData.append('images',images[i]);
    }
    
    try {
      alert('Form data logged in the database!');
      // Remove this or add the API endpoint once ready.
      await axios.post("http://localhost:8080/",formData);
     
    } catch (err) {
      console.error('Error during submission:', err);
    }
  };

  return (
    <div>
      <h1>User Submission Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Social Handle: &nbsp;&nbsp;</label>
          <input
            type="text"
            value={socialHandle}
            onChange={(e) => setSocialHandle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Upload Images: &nbsp;</label>
          <input type="file" multiple onChange={handleImageChange} required />
        </div>
       <br/>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default UserForm;