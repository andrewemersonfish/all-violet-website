import Image from 'next/image'
import Link from 'next/link'

export default function RetroHero() {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
      <h1 style={{ fontSize: '48px', color: '#FF00FF', fontFamily: 'Comic Sans MS, cursive' }}>
        Welcome to All Violet's Website!
      </h1>
      <div className="marquee">
        <p style={{ fontSize: '24px', color: '#FFFF00' }}>
          <strong>New album "Digital Dreams" dropping on 07.07.2003!</strong>
        </p>
      </div>
      <Image src="/Houndstooth.jpg" width={300} height={200} alt="Houndstooth Pattern" />
      <div>
        <Image src="/images/divider.gif" width={500} height={20} alt="Divider" />
      </div>
    </div>
  )
}
