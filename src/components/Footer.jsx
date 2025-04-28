const Footer = () => {
  return (
    <>
      <footer>
        <div className="form">
          <div className="contact-us">Contact Us</div>
          <form>
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <textarea rows={7} placeholder="Message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </footer>
      <p className="copy-right">© 2025 OdinMart. All rights reserved.</p>
    </>
  );
};

export default Footer;
