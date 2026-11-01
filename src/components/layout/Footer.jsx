import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

import logo from '../../assets/images/logo-bottom.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">
          <div>
            <span className="eyebrow light">HAVE A CAMPAIGN IN MIND?</span>
            <h2>
              Let's make
              <br />
              <em>something move.</em>
            </h2>
          </div>

          <Link className="footer-big-link" to="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>

        <div className="footer-grid">

          <div className="footer-brand-col">
            <Link className="brand footer-brand" to="/">
              <img
                src={logo}
                alt="The Social Lane"
                className="footer-logo"
              />
            </Link>

            <p>
              We connect brands, creators and communities through ideas
              that travel further.
            </p>

            <div className="socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
          </div>

          <div>
            <h4>What we do</h4>
            <Link to="/services">Influencer marketing</Link>
            <Link to="/services">Movie & OTT promotions</Link>
            <Link to="/services">Instagram amplification</Link>
            <Link to="/services">Events & activations</Link>
            <Link to="/services">Manpower support</Link>
          </div>

          <div className="footer-contact">
            <h4>Get in touch</h4>

            <a href="mailto:your-email@example.com">
              <Mail /> your-email@example.com
            </a>

            <a href="tel:+917304969230">
              <Phone /> +91 73049 69230
            </a>

            <span>
              <MapPin /> Mumbai, India
            </span>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} The Social Lane. All rights reserved.
          </span>
          <span>Built to connect. Made to grow.</span>
        </div>

      </div>
    </footer>
  );
}