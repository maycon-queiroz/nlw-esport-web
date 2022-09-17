
import './styles/main.css';
import LogoImage from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <img className="mt-10" src={LogoImage} alt="Logo com o texto Esports NLW" />
      <h1 className="text-6xl mt-5 text-white font-black">
        Seu <span className="text-transparent  bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-10">
        <GameBanner title='Word WarCraff' adsCount={4} bannerUrl="gamer-1.png" />
        <GameBanner title='League of Legends' adsCount={4} bannerUrl="gamer-2.png" />
        <GameBanner title='Dota 2' adsCount={4} bannerUrl="gamer-3.png" />
        <GameBanner title='CS:Go' adsCount={4} bannerUrl="gamer-4.png" />
        <GameBanner title='APEX' adsCount={4} bannerUrl="gamer-5.png" />
        <GameBanner title='Fortnite' adsCount={4} bannerUrl="gamer-6.png" />
      </div>

      <CreateAdBanner />

    </div>
  )
}

export default App
