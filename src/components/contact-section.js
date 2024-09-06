import styles from '@/common/styles/contact.css';

export default function Contact() {
  return (
    <>
      <h2 id="contact">contact</h2>

      <section className="contact-sect">
        <div className="card">
          <p>
            Questions?
            <a href="mailto:info@frontendforge.com" data-text="click-here">click here</a>.<br />
            Looking to build your own website?
            <a href="mailto:info@frontendforge.com" data-text="email info@frontendforge.com">Email info@frontendforge.com</a>.<br />
            Any questions you might have about next steps or where to start will happily be answered.
          </p>
        </div>

        <h3>Additional Services</h3>

        <div className="card">
          <ul>
            <li>
              <strong>Free Estimates:</strong> With a few details about your project several price points and options can be laid out. Starting the conversation with a clear breakdown that
              outlines the entire process will help. With over 12 years of experience providing bids to businesses of all sizes, I'm confident we provide you with enough information to make a decision you're comfortable making. Let's get started without any more delay - the time to take action is now!</li>
            <li><strong>Consultations:</strong> I'm pretty easy going about this and will offer free advice if we have the time. But please, be reasonable and respectful of my time as well.</li>
            <li><strong>Troubleshooting Assistance:</strong> New to web development and just cannot figure out that one bug? Sometimes a fresh pair of eyes or simply describing the problem to someone else will reveal the solution.</li>
          </ul>
        </div>
      </section>
    </>
  );
}