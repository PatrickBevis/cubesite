import React, { useState } from 'react';
import { RandomColor } from './randomColor';

const Form = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom: ${name}\nMessage: ${message}`);
    // Réinitialiser les champs du formulaire
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='p-24'>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nom
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
          className="w-full px-3 py-2 border-2 border-black rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border-2 border-black rounded-lg "
          rows="4"
          required
        />
      </div>
      <div className="flex justify-end mt-10">
        <button
          type="submit"
          className={`p-4 border-4 border-black rounded-3xl ${RandomColor()}`}
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
