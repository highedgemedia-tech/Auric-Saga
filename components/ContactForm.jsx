"use client";

import { useState } from "react";

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const subject = form.get("subject")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    const mailSubject = encodeURIComponent(subject || "Auric Saga Consultation Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    );

    setStatus("Opening your email app with the message prepared.");
    window.location.href = `mailto:care@auricsaga.com?subject=${mailSubject}&body=${body}`;
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor={compact ? "compact-name" : "name"}>Name</label>
          <input id={compact ? "compact-name" : "name"} name="name" required placeholder="Your full name" />
        </div>
        <div className="field">
          <label htmlFor={compact ? "compact-email" : "email"}>Email</label>
          <input id={compact ? "compact-email" : "email"} type="email" name="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div className="field">
        <label htmlFor={compact ? "compact-subject" : "subject"}>Subject</label>
        <input id={compact ? "compact-subject" : "subject"} name="subject" required placeholder="What would you like guidance on?" />
      </div>
      <div className="field">
        <label htmlFor={compact ? "compact-message" : "message"}>Message</label>
        <textarea id={compact ? "compact-message" : "message"} name="message" required placeholder="Share your concern, preferred modality, and suitable time." />
      </div>
      <button className="btn btn-primary btn-lg" type="submit">Send Inquiry</button>
      {status ? <p role="status">{status}</p> : null}
    </form>
  );
}
