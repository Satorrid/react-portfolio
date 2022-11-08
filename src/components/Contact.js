import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleNameBlur() {
    if (name === "") {
      alert("Name is required");
    }
  }

  function handleEmailBlur() {
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (!/^.+\@.+\..+$/.test(email)) {
      alert("Email must be valid");
    }
  }

  function handleMessageBlur() {
    if (message === "") {
      alert("A message is required");
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label>
          Name:
          <input
            required
            onBlur={handleNameBlur}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          Email:
          <input
            required
            type="email"
            onBlur={handleEmailBlur}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          Message:
          <textarea
            required
            onBlur={handleMessageBlur}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
