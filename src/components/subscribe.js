import * as React from "react"
import { navigate } from "gatsby"

const NewsletterForm = () => {
  const handleSubmit = ({event}) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/news-thanks/"))
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={handleSubmit} method="post" name="newsletter" netlify>
        <input type="text" name="email" placeholder="your email address"/>
        <select name="action">
          <option value="add">subscribe</option>
          <option value="remove">unsubscribe</option>
        </select>
      <button type="submit">Send</button>
    </form>
  )

}

export default NewsletterForm