import { Link } from 'react-router-dom'
const About: React.FC = () => {
  return (
    <>
      <p className='text-4xl'>About Page</p>
      <Link to='/'>← Home Page</Link>
    </>
  )
}

export default About
