import IconArrow from './icon-arrow';
import IconError from './icon-error';
import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(/^[^@]+@\w+(\.\w+)+\w$/.test(email)){
      setEmail('');
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label='form' className="form">
      <input
        id="email"
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit" aria-label="submit">
        <IconArrow />
      </button>
      {error && (
        <>
          <IconError />
          <div className="error-message">Please provide a valid email</div>
        </>
      )}
    </form>
  );
}
