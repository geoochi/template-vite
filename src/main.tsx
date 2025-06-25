import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import About from './components/About'
import NotFound from '@/components/NotFound'
import '@/global.css'

const Layout: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<Layout />)
