export default function Tour() {
  return (
    <div style={{ color: '#FFFFFF', fontFamily: 'Comic Sans MS, cursive', textAlign: 'center', margin: '50px' }}>
      <h1>Upcoming Shows</h1>
      <table style={{ margin: '0 auto', color: '#00FF00' }}>
        <tr>
          <th>Date</th>
          <th>Venue</th>
          <th>City</th>
        </tr>
        <tr>
          <td>06/15</td>
          <td>Cyber Cafe</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>06/22</td>
          <td>The Matrix</td>
          <td>Los Angeles</td>
        </tr>
        <tr>
          <td>06/29</td>
          <td>Millennium Club</td>
          <td>Chicago</td>
        </tr>
      </table>
    </div>
  )
}
