import React from 'react'
function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-12 px-6 md:px-16 mt-1">
      <div className="mt-12 border-t border-white pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Bizers™. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer