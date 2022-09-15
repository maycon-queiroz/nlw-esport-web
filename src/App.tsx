import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css';
import LogoImage from './assets/logo-nlw-esports.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <img className="mt-10" src={LogoImage} alt="Logo com o texto Esports NLW" />
      <h1 className="text-6xl mt-5 text-white font-black">
        Seu <span className="text-transparent  bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-10">
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./gamer-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./gamer-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./gamer-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./gamer-4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./gamer-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./gamer-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block"> Public um anúncio para encontrar novos players</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncios
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
