import Image from 'next/image'
import RetroNavBar from '../../components/RetroNavBar'
import RetroFooter from '../../components/RetroFooter'

export default function About() {
  return (
    <>
      <RetroNavBar />
      <main style={{ flex: '1', textAlign: 'center', padding: '20px' }}>
        <div style={{ color: '#FFFFFF', fontFamily: 'Comic Sans MS, cursive' }}>
          <h1>About All Violet</h1>
          <p>
            All Violet is a groundbreaking band bringing the sounds of the future to you today!
            Formed in the late 90s, we blend electronic beats with rock influences.
          </p>
          <h2>Band Members</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>🔥 <strong>Violet Ray</strong> - Vocals & Synth</li>
            <li>🎸 <strong>Echo Storm</strong> - Guitar</li>
            <li>🥁 <strong>Pulse Wave</strong> - Drums</li>
            <li>🎹 <strong>Neon Flux</strong> - Keyboard</li>
          </ul>
          {/* Use existing image */}
          <div>
            <Image src="/Houndstooth.jpg" width={300} height={200} alt="Band Photo" />
          </div>
        </div>
      </main>
      <RetroFooter />
    </>
  )
}
