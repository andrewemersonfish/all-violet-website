import RetroNavBar from '../components/RetroNavBar'
import RetroHero from '../components/RetroHero'

export default function Home() {
  return (
    <div className="retro-container">
      <RetroNavBar />
      <main>
        <RetroHero />
        {/* Add any new components here if needed */}
      </main>
    </div>
  )
}
