import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
import Link from 'next/link';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/contact`, {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (res.ok) {
      alert('Your response has been received!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  return (
    <div className={styles.container}>
      <div className="links">
        <Link href="/" className="linksItem">
          <a> Home 111</a>
        </Link>

        <Link href="/software" className="linksItem">
          <a> Software </a>
        </Link>
        <Link href="/products" className="linksItem">
          <a> Products </a>
        </Link>

        <Link href="/myself" className="linksItem">
          <a> Myself </a>
        </Link>
        <Link href="/roadmap" className="linksItem">
          <a> Map </a>
        </Link>
      </div>

      <div>
        <p>James L. Avakian, Software Developer</p>
        <h1>Reach Out Via Socials</h1>
        <ContactCode />
      </div>
      <div>
        <h1>Or Fill Out The Form</h1>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
