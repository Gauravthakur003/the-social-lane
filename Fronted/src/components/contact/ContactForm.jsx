import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";

import { contactReasons } from "../../data/contact";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  reason: "",
  budget: "",
  message: "",
  consent: false,
};

function ContactForm() {
  const [formData, setFormData] =
    useState(initialForm);

  const [errors, setErrors] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName =
        "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName =
        "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Enter a valid email address.";
    }

    if (!formData.reason) {
      newErrors.reason =
        "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please tell us a little about your project.";
    } else if (
      formData.message.trim().length < 20
    ) {
      newErrors.message =
        "Please provide at least 20 characters.";
    }

    if (!formData.consent) {
      newErrors.consent =
        "Please accept the privacy terms.";
    }

    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors).length
    ) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    /*
     * IMPORTANT:
     *
     * For now this is frontend-only.
     *
     * Later this will become:
     *
     * POST /api/v1/contact
     *
     * with the request body:
     *
     * {
     *   firstName,
     *   lastName,
     *   email,
     *   phone,
     *   company,
     *   reason,
     *   budget,
     *   message
     * }
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData(initialForm);
  }

  if (submitted) {
    return (
      <div className="contact-success">
        <div className="contact-success-icon">
          <CheckCircle2 size={28} />
        </div>

        <h2>
          Thanks for reaching out.
        </h2>

        <p>
          Your message has been received.
          We'll get back to you as soon as
          possible.
        </p>

        <button
          type="button"
          onClick={() =>
            setSubmitted(false)
          }
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="contact-form-heading">
        <span className="section-label">
          PROJECT ENQUIRY
        </span>

        <h2>
          Tell us about
          <br />
          your project.
        </h2>
      </div>

      {/* NAME */}

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="firstName">
            First Name *
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Gaurav"
            autoComplete="given-name"
          />

          {errors.firstName && (
            <span className="form-error">
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="lastName">
            Last Name *
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Thakur"
            autoComplete="family-name"
          />

          {errors.lastName && (
            <span className="form-error">
              {errors.lastName}
            </span>
          )}
        </div>
      </div>

      {/* EMAIL + PHONE */}

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">
            Work Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
          />

          {errors.email && (
            <span className="form-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="phone">
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91"
            autoComplete="tel"
          />
        </div>
      </div>

      {/* COMPANY */}

      <div className="form-field">
        <label htmlFor="company">
          Company / Brand
        </label>

        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
          autoComplete="organization"
        />
      </div>

      {/* SERVICE */}

      <div className="form-field">
        <label htmlFor="reason">
          What can we help with? *
        </label>

        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
        >
          <option value="">
            Select a service
          </option>

          {contactReasons.map(
            (reason) => (
              <option
                value={reason}
                key={reason}
              >
                {reason}
              </option>
            )
          )}
        </select>

        {errors.reason && (
          <span className="form-error">
            {errors.reason}
          </span>
        )}
      </div>

      {/* BUDGET */}

      <div className="form-field">
        <label htmlFor="budget">
          Estimated Budget
        </label>

        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">
            Select budget range
          </option>

          <option value="under-50k">
            Under ₹50K
          </option>

          <option value="50k-1l">
            ₹50K – ₹1L
          </option>

          <option value="1l-3l">
            ₹1L – ₹3L
          </option>

          <option value="3l-5l">
            ₹3L – ₹5L
          </option>

          <option value="5l-plus">
            ₹5L+
          </option>

          <option value="not-sure">
            Not sure yet
          </option>
        </select>
      </div>

      {/* MESSAGE */}

      <div className="form-field">
        <label htmlFor="message">
          Tell us about your project *
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What are you trying to achieve?"
          rows={6}
        />

        <div className="textarea-footer">
          <span>
            {formData.message.length}
            /1000
          </span>
        </div>

        {errors.message && (
          <span className="form-error">
            {errors.message}
          </span>
        )}
      </div>

      {/* CONSENT */}

      <div className="form-consent">
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />

          <span>
            I agree to the processing of
            my information according to
            the privacy policy.
          </span>
        </label>

        {errors.consent && (
          <span className="form-error">
            {errors.consent}
          </span>
        )}
      </div>

      {/* SUBMIT */}

      <button
        type="submit"
        className="contact-submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Sending..."
          : "Send Enquiry"}

        {!isSubmitting && (
          <ArrowRight size={17} />
        )}
      </button>
    </form>
  );
}

export default ContactForm;