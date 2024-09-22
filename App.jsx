import React from 'react';
import "./App.css";
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard.jsx';

const App = () => {

  return (
    <div className="App">
      <UserForm />
      <hr/>
      <AdminDashboard/>
    </div>
  );
};

export default App;