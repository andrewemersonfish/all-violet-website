export default function Guestbook() {
  return (
    <div style={{ color: '#00FF00', fontFamily: 'Courier New, monospace', textAlign: 'center', margin: '50px' }}>
      <h1>All Violet's Guestbook</h1>
      <p>Please sign our guestbook and let us know what you think!</p>
      <form>
        <p>
          <label>Name:<br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>Message:<br />
            <textarea name="message" rows={5} cols={40}></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Sign Guestbook</button>
        </p>
      </form>
      <div>
        <p>You are visitor number: [Visitor Count Here]</p>
      </div>
    </div>
  )
}
