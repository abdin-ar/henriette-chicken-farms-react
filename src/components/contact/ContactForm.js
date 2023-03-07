import { useState } from "react";
import FormInput from "./FormInput";

const ContactForm = () => {
  const [contactMessage, setContactMessage] = useState({
    fName: "",
    lName: "",
    email: "",
    subject: "",
    textmessage: "",
  });
  const [formAlertStatus, setFormAlertStatus] = useState({
    text: "",
    classes: "displayNone",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setContactMessage((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkContents() === true) {
      const myMessage = contactMessage;
      myMessage.timeSent = new Date();
      console.log(`Time Sent: ${myMessage.timeSent}
First Name: ${myMessage.fName}
Last Name: ${myMessage.lName}
Email: ${myMessage.email}
Subject: ${myMessage.subject}
Message: ${myMessage.textmessage}`);
      formAlert("success", "Your message was sent successfully");

      setContactMessage({
        fName: "",
        lName: "",
        email: "",
        subject: "",
        textmessage: "",
      });
    } else {
      formAlert("danger", "Some fields are not filled!");
    }
  };

  function checkContents() {
    const { fName, lName, email, subject, textmessage } = contactMessage;
    if (!fName || !lName || !email || !subject || !textmessage) {
      return false;
    } else {
      return true;
    }
  }

  function formAlert(state, text) {
    setFormAlertStatus({
      ...formAlertStatus,
      text: text,
      classes: `alert alert-${state}`,
    });
    setTimeout(() => {
      setFormAlertStatus({
        ...formAlertStatus,
        text: "",
        classes: "displayNone",
      });
    }, 10000);
  }

  return (
    <form className="form-in-section" onSubmit={handleSubmit}>
      <p>Please note that all the fields are required.</p>
      <FormInput
        label="First Name"
        name="fName"
        type="text"
        maxLength="30"
        autoComplete="off"
        placeholder="John"
        required
        onChange={handleChange}
        value={contactMessage.fName}
      />
      <FormInput
        label="Last Name"
        name="lName"
        type="text"
        maxLength="30"
        autoComplete="off"
        placeholder="Doe"
        required
        onChange={handleChange}
        value={contactMessage.lName}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        autoComplete="off"
        placeholder="example@email.com"
        required
        onChange={handleChange}
        value={contactMessage.email}
      />
      <FormInput
        label="Subject"
        name="subject"
        type="text"
        maxLength="100"
        autoComplete="off"
        placeholder="Subject of your Query"
        required
        onChange={handleChange}
        value={contactMessage.subject}
      />
      <FormInput
        label="Message"
        name="textmessage"
        type="textarea"
        maxLength="1000"
        autoComplete="off"
        placeholder="Write your message here"
        required
        onChange={handleChange}
        value={contactMessage.textmessage}
      />
      <FormInput
        type="alert"
        name={formAlertStatus.text}
        className={formAlertStatus.classes}
      />
      <FormInput type="submit" name="Send Message" />
    </form>
  );
};

export default ContactForm;
