import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }
    console.log('Subscribed email:', email);
    alert('Thank you for subscribing!');
    setEmail(''); // reset input
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mt-5 mx-auto"
      >
        <input
          className="w-full sm:flex-1 outline-none border px-4 py-2"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;

