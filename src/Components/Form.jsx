import React from "react";
import { useState } from "react";


const Form = () => {
  
  const [name,setName] = useState('') 
  const [email,setEmail] = useState('') 

  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false)

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim().length < 5 || !validateEmail(email)) {
      setError(true);
      setFlag(false);
    } else{
      setError(false);
      setFlag(true);
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className="home-container">
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>

      </form>
      {error ? <p>Por favor verifique su información nuevamente</p> : null }
      {flag ? <p>Gracias {name}, te contactaremos cuando antes vía mail</p> : null }
    </div>
  );
};

export default Form;
