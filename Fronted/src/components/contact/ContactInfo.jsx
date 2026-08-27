import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { contactDetails } from "../../data/contact";
import Container from "../common/Container";

const icons = {
  EMAIL: Mail,
  PHONE: Phone,
  LOCATION: MapPin,
};

function ContactInfo() {
  return (
    <aside className="contact-info">

      <div className="contact-info-heading">
        <span className="section-label">
          CONTACT
        </span>

        <h2>
          Start a
          <br />
          conversation.
        </h2>

        <p>
          Whether you're launching something new
          or looking to take an existing brand
          further, we'd love to hear about it.
        </p>
      </div>

      <div className="contact-details">
        {contactDetails.map((detail) => {
          const Icon =
            icons[detail.label];

          return (
            <a
              href={detail.href}
              key={detail.id}
              className="contact-detail"
            >
              <div className="contact-detail-icon">
                <Icon size={17} />
              </div>

              <div className="contact-detail-text">
                <span>
                  {detail.label}
                </span>

                <strong>
                  {detail.value}
                </strong>
              </div>

              <ArrowUpRight
                size={15}
                className="contact-detail-arrow"
              />
            </a>
          );
        })}
      </div>

    </aside>
  );
}

export default ContactInfo;