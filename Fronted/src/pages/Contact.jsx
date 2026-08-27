import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <div className="page">

      <Navbar />

      <main>

        <ContactHero />

        <section className="contact-section section">
          <div className="container">

            <div className="contact-layout">

              <ContactInfo />

              <ContactForm />

            </div>

          </div>
        </section>

      </main>

    </div>
  );
}

export default Contact;