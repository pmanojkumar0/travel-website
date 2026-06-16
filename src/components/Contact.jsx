import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent]     = useState(false);

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const validate = (field, value) => {
    if (field === "name")    return value.trim().length > 0  ? "" : "Please enter your name";
    if (field === "email")   return isEmail(value)           ? "" : "Enter a valid email";
    if (field === "subject") return value !== ""             ? "" : "Please select a subject";
    if (field === "message") return value.trim().length >= 10 ? "" : "Message must be at least 10 characters";
    return "";
  };

  const handleBlur = (field) =>
    setErrors(e => ({ ...e, [field]: validate(field, form[field]) }));

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: validate(field, value) }));
  };

  const canSend = form.name.trim() && isEmail(form.email) && form.subject && form.message.trim().length >= 10;

  const handleSubmit = () => {
    const newErrors = Object.fromEntries(
      Object.keys(form).map(k => [k, validate(k, form[k])])
    );
    setErrors(newErrors);
    if (Object.values(newErrors).every(e => !e)) setSent(true);
  };

  if (sent) return (
    <section id="contact" className="contact success">
      <div className="success-icon">✓</div>
      <h3>Message sent!</h3>
      <p>We'll reply to your email shortly.</p>
      <button onClick={() => { setForm({ name:"", email:"", subject:"", message:"" }); setSent(false); }}>
        Send another
      </button>
    </section>
  );

  return (
    <section id="contact" className="contact">
      <h2>Send us a message</h2>
      <p className="subtitle">We'll get back to you within 24 hours.</p>

      <div className="row">
        <div className={`field ${errors.name ? "invalid" : ""}`}>
          <label>Your name</label>
          <input type="text" value={form.name} placeholder="Ravi Kumar"
            onChange={e => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")} />
          {errors.name && <span className="err">{errors.name}</span>}
        </div>
        <div className={`field ${errors.email ? "invalid" : ""}`}>
          <label>Email address</label>
          <input type="email" value={form.email} placeholder="ravi@example.com"
            onChange={e => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")} />
          {errors.email && <span className="err">{errors.email}</span>}
        </div>
      </div>

      <div className={`field ${errors.subject ? "invalid" : ""}`}>
        <label>Subject</label>
        <select value={form.subject} onChange={e => handleChange("subject", e.target.value)}
          onBlur={() => handleBlur("subject")}>
          <option value="">Select a topic…</option>
          <option>General enquiry</option>
          <option>Trip planning help</option>
          <option>Booking support</option>
          <option>Feedback</option>
          <option>Other</option>
        </select>
        {errors.subject && <span className="err">{errors.subject}</span>}
      </div>

      <div className={`field ${errors.message ? "invalid" : ""}`}>
        <label>Message</label>
        <textarea value={form.message} placeholder="Tell us how we can help…" maxLength={500}
          onChange={e => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")} />
        <span className="char-count">{form.message.length} / 500</span>
        {errors.message && <span className="err">{errors.message}</span>}
      </div>

      <button className="send-btn" disabled={!canSend} onClick={handleSubmit}>
        Send message
      </button>

      <p className="privacy">🔒 Your details are never shared with third parties.</p>
    </section>
  );
}

export default Contact;