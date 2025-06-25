import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const [countdown, setCountdown] = useState(3)
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [countdown])
  useEffect(() => {
    if (countdown === 0) {
      navigate('/')
    }
  }, [countdown, navigate])
  return (
    <>
      <h1 className='text-2xl'>404 - Page Not Found</h1>
      <p>
        return in <span>{countdown}</span> seconds
      </p>
    </>
  )
}

export default NotFound
