import Image from 'next/image'
import Link from 'next/link'

export default function RetroHero() {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
      <h1 style={{ fontSize: '48px', color: '#FF00FF', fontFamily: 'Courier New, bold' }}>
        All Violet The Band
      </h1>
      <div className="marquee">
        <p style={{ fontSize: '24px', color: '#FFFF00' }}>
          <strong style={{ color: '#00FFFF' }}>NEON SEEPING FROM THE PAVEMENT</strong>
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src="/changing_pasture.jpg" width={500} height={20} alt="Divider" />
      </div>
      
    </div>
  )
}
