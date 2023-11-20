import { BrowserRouter as  Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
    <ul>
    <div className="top-0 z-10 w-full ">
        <div className="flex items-center justify-between w-full p-4 bg-red-600 header">
          <Link to='/'className="p-2 text-3xl font-bold">Typical Meals</Link>
        </div>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar