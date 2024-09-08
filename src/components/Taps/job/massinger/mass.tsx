// pages/index.tsx
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Home: NextPage = () => {
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Simulate form submission
    try {
      // Perform form submission here (e.g., send data to an API)
      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <div className="tab-content-wrapper">
        <p>
        If you have any questions regarding your dealings with me, please feel free to contact me at the above address, email address or telephone number.
       </p>

        <div className="home-map-wrapper">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="map-preview-wrapper"
          >
            <img
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/6298d084ad802b3d81d365d9_Subtle%20Greyscale%20Map%20-%20Snazzy%20Maps%20-%20Free%20Styles%20for%20Google%20Maps%202022-06-02%2017-59-04%20(1).png"
              alt="map"
              className="map-preview"
            />
          </motion.div>
          <div className="main-map w-widget w-widget-map">
            {/* Map Widget can be integrated here */}
          </div>
        </div>

        <div className="home-contact-grid">
          <div className="home-contact-item">
            <img
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/6298da2d568493427a841108_Icon-map-1.svg"
              alt="icon"
              className="home-contact-icon"
            />
            <p>Israel-Jerusalem</p>
          </div>
          <div className="home-contact-item">
            <img
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/6298da2cfbbdfd2014c09177_icon-mail-1.svg"
              alt="icon"
              className="home-contact-icon"
            />
            <p>
              <a href="mailto:dani.r@mail.com" className="home-contact-link">anas.sh017@gmail.com</a>
            </p>
          </div>
          <div className="home-contact-item">
            <img
              src="https://cdn.prod.website-files.com/6292458ea6c91805d3cb2506/6298da2edb57d0397cfa0ce7_icon-phone-1.svg"
              alt="icon"
              className="home-contact-icon"
            />
            <p>
              <a href="tel:2567761614" className="home-contact-link">0584627070</a>
            </p>
          </div>
        </div>

        <div className="home-divider"></div>
        <h3 className="home-section-title">Send Message</h3>
        <div className="w-form">
          <form id="email-form" name="email-form" method="post" className="home-contact-form" onSubmit={handleSubmit}>
            <input
              className="home-contact-text-field"
              name="first-name"
              placeholder="First name"
              type="text"
              id="first-name"
              required
            />
            <input
              className="home-contact-text-field"
              name="last-name"
              placeholder="Second name"
              type="text"
              id="last-name"
              required
            />
            <input
              className="home-contact-text-field"
              name="email"
              placeholder="Email"
              type="email"
              id="email"
              required
            />
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              required
              className="home-contact-text-field"
            />
            <motion.input
              type="submit"
              value="Send Message"
              className="submit-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </form>
          {formStatus === 'success' && (
            <div className="success-message" role="alert">
              Thank you! Your submission has been received!
            </div>
          )}
          {formStatus === 'error' && (
            <div className="error-message" role="alert">
              Oops! Something went wrong while submitting the form.
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        :root {
          --paragraph-grey: #7d7d7d;
          --dark-gray-50: #e5e3df;
          --white: #ffffff;
          --primary-dark: #333333;
        }

        body {
          font-family: Roboto, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .tab-content-wrapper {
          padding: 50px 0 70px;
        }

        p {
          color: var(--paragraph-grey);
          margin: 10px 0;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.5em;
        }

        .home-map-wrapper {
          height: 330px;
          margin: 30px 0;
          position: relative;
        }

        .map-preview-wrapper {
          width: 100%;
          height: 100%;
        }

        .map-preview {
          width: 100%;
          height: auto;
          display: block;
        }

        .home-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          margin-top: 30px;
        }

        .home-contact-item {
          display: flex;
          align-items: center;
        }

        .home-contact-icon {
          margin-right: 10px;
        }

        .home-divider {
          background-color: var(--dark-gray-50);
          width: 100%;
          height: 1px;
          margin: 50px 0;
        }

        .home-section-title {
          color: var(--white);
          margin: 0 0 30px;
          font-size: 24px;
          line-height: 30px;
        }

        .home-contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .home-contact-text-field {
          border: 1px solid transparent;
          border-bottom-color: var(--paragraph-grey);
          color: var(--paragraph-grey);
          background-color: transparent;
          padding: 8px;
          font-size: 18px;
        }

        .submit-button {
          background-color: #0070f3;
          color: #fff;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s, transform 0.2s;
        }

        .submit-button:hover {
          background-color: #005bb5;
        }

        .submit-button:active {
          background-color: #003d7a;
          transform: scale(0.95);
        }

        .success-message, .error-message {
          display: none;
          padding: 10px;
          border-radius: 5px;
          margin-top: 10px;
        }

        .success-message {
          background-color: #d4edda;
          color: #155724;
        }

        .error-message {
          background-color: #f8d7da;
          color: #721c24;
        }
      `}</style>
    </>
  );
};

export default Home;
