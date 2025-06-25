import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/use-theme'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <p className='text-3xl'>template - vite@7 - react@19 - shadcn@canary - tailwindcss@4</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Link to='/about'>→ About Page</Link>
    </>
  )
}

export default Home
