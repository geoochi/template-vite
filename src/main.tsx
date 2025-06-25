import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from '@/components/NotFound'
import '@/global.css'

const App: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
