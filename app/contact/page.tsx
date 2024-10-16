export default function Contact() {
  return (
    <div style={{ color: '#FF00FF', fontFamily: 'Comic Sans MS, cursive', textAlign: 'center', margin: '50px' }}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out for bookings or collaborations!</p>
      <p>Email: <a href="mailto:booking@allviolet.com" style={{ color: '#FFFF00' }}>booking@allviolet.com</a></p>
      <p>Phone: (555) 123-4567</p>
      {/* Add a simple contact form */}
      <form>
        <p>
          <label>Name:<br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>Email:<br />
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>Message:<br />
            <textarea name="message" rows={5} cols={40}></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send Message</button>
        </p>
      </form>
    </div>
  )
}
