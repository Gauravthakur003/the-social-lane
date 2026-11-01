import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New website enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\n\n${form.message}`,
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <>
      <PageHero
        kicker="LET'S CONNECT"
        number="05"
        title={
          <>
            Have something
            <br />
            <span>in mind?</span> Let's talk.
          </>
        }
        description="Tell us what you're working on, what you're imagining or what you need help making happen."
      />
      <section className="section container contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">START A CONVERSATION</span>
          <h2>
            Good things
            <br />
            start with a <em>hello.</em>
          </h2>
          <p>Share a few details and we'll take it from there.</p>
          <div className="contact-lines">
            <a href="mailto:your-email@example.com">
              <Mail />
              your-email@example.com
            </a>
            <a href="tel:+917304969230">
              <Phone />
              +91 73049 69230
            </a>
            <span>
              <MapPin />
              Mumbai, India
            </span>
          </div>
          <div className="contact-direct">
            <span>Prefer a direct conversation?</span>
            <a
              href="https://wa.me/917304969230"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-heading">
            <span className="eyebrow">PROJECT ENQUIRY</span>
            <h3>Tell us about it.</h3>
          </div>
          <label>
            Your name
            <input
              required
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Name"
            />
          </label>
          <label>
            Email address
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="you@company.com"
            />
          </label>
          <label>
            Company / Brand
            <input
              name="company"
              value={form.company}
              onChange={update}
              placeholder="Your company (optional)"
            />
          </label>
          <label>
            What do you need help with?
            <select name="service" value={form.service} onChange={update}>
              <option value="">Select a service</option>
              <option>Influencer & creator marketing</option>
              <option>Movie, music & OTT promotions</option>
              <option>Instagram amplification</option>
              <option>Events & activations</option>
              <option>Operational support</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Tell us a little more
            <textarea
              required
              rows="4"
              name="message"
              value={form.message}
              onChange={update}
              placeholder="A little context about your project..."
            />
          </label>
          <button className="primary-btn form-submit" type="submit">
            Send enquiry <ArrowUpRight size={17} />
          </button>
          {sent && (
            <p className="form-success">
              <CheckCircle2 size={16} /> Your email app should open with the
              enquiry details.
            </p>
          )}
          <small className="form-note">
            This form opens your default email app. No information is stored on
            this website.
          </small>
        </form>
      </section>
    </>
  );
}
