import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
    <ul>
    <div className="top-0 z-10 w-full ">
        <div className="flex items-center justify-between w-full p-4 bg-red-600 header">
          <Link to='/'className="text-3xl font-bold">E-commerce</Link>
        </div>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar