import React from 'react'
function Footer() {
  return (
    <footer className="bg-[#525151] absolute bottom-0 left-0  h-[8vh]">
      <div className=" border-t border-white pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Bizers™. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer