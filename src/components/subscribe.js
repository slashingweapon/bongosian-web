import * as React from "react"
import { navigate } from "gatsby"

const SubscribeForm = () => {
  const handleSubmit = ({event}) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/sub-thanks/"))
      .catch((error) => alert(error));
  };

  return (
    <form 
      name="newsletter" 
      method="post" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field" 
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="newsletter"/>
      <input type="text" name="email" size="40" placeholder="your email address"/>
      <select name="action">
        <option value="add">subscribe</option>
        <option value="remove">unsubscribe</option>
      </select>
      <button type="submit">Send</button>
    </form>
  )

}

export default SubscribeForm