
import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';
import LogoImage from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/input';

interface Game {
  bannerUrl: string;
  id: string;
  title: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGame] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => setGame(data))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <img className="mt-10" src={LogoImage} alt="Logo com o texto Esports NLW" />
      <h1 className="text-6xl mt-5 text-white font-black">
        Seu <span className="text-transparent  bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-10">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              adsCount={game._count.ads}
              bannerUrl={game.bannerUrl}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
