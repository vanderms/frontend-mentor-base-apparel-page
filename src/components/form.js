import IconArrow from './icon-arrow';
import IconError from './icon-error';


export default function Form() {
  return (
    <form className="form">     
      <input id='email' type="text" placeholder='Email Address'/>
      <button type="submit" aria-label="submit">
        <IconArrow />
      </button>
      <IconError/>
      <div className="error-message">Please provide a valid email</div>
      
    </form>
  );
}
