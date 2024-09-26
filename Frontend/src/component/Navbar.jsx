import React from 'react'

function Navbar() {
  return (
    <>
    <body className="bg-blue-500">
  <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
    <a className="text-3xl font-bold leading-none" href="#">
      <svg className="h-10" viewBox="0 0 10240 10240">
        {/* SVG Path for logo */}
      </svg>
    </a>
    <div className="lg:hidden">
      <button className="navbar-burger flex items-center text-blue-600 p-3">
        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
      <li className="text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </li>
      <li><a className="text-sm text-blue-600 font-bold" href="#">About Us</a></li>
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
    </ul>
    <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" href="#">Sign In</a>
    <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign Up</a>
  </nav>

  {/* Mobile menu */}
  <div className="navbar-menu relative z-50 hidden">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-3xl font-bold leading-none" href="#">
          <svg className="h-12" viewBox="0 0 10240 10240">
            {/* SVG Path for logo */}
          </svg>
        </a>
      </div>
      {/* Mobile navigation links */}
      <ul className="space-y-6">
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
        <li><a className="text-sm text-blue-600 font-bold" href="#">About Us</a></li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
      </ul>
      <div className="mt-auto">
        <a className="block py-2 px-6 mb-3 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" href="#">Sign In</a>
        <a className="block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign Up</a>
      </div>
    </nav>
  </div>
</body>
</>
  )
}

export default Navbar