import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);
    setStatus("");
    setStatusType("");

    emailjs
      .sendForm(
        "service_dasswdg", // Service ID
        "template_ts55sog", // Template ID
        e.target,
        "nZetdc9H9Ax398d2v" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setIsSent(true);
          setStatusType("success");
          setStatus("Message sent successfully!");
          e.target.reset();
          setTimeout(() => setIsSent(false), 2500); // reset after animation
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setStatusType("error");
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together?</p>

        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />

          <button
            type="submit"
            className={`send-btn ${isSending ? "sending" : ""} ${isSent ? "sent" : ""}`}
            disabled={isSending}
          >
            {isSending ? (
              <span className="spinner"></span>
            ) : isSent ? (
              <span className="checkmark">✔</span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {status && (
          <div id="formStatus" className={`status-msg ${statusType}`}>
            {statusType === "success" ? "✔ " : "✖ "} {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
