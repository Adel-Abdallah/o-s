import React, { useState } from "react";
import "./contact.css";
function ContactForm() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="form-container">
      <h1>Contact</h1>
      <form className="form">
        <div className="row">
          <div className="row1">
            <label>
              姓
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="例）太郎"
              />
            </label>
          </div>
          <div className="row2">
            <label>
              名
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="例）山田"
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            メールアドレス
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="例）yamada@email.com"
            />
          </label>
        </div>
        <div>
          <label>
            お問合せ内容
            <textarea value={message} onChange={handleMessageChange} />
          </label>
        </div>
        <div className="button-container">
        <button type="submit">送信する</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
