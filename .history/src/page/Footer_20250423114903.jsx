import React from 'react'
function Footer() {
  return (
    <footer className="bg-[#525151] relative bottom-0 w-full  h-[8vh]">
      <div className=" border-t border-white pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Bizers™. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer