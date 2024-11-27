import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} EmailFlow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <NavLink
                to="#"
                className="text-gray-400 hover:text-gray-300"
                aria-label="Facebook"
              >
                <i className="ri-facebook-line text-xl"></i>
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-400 hover:text-gray-300"
                aria-label="Twitter"
              >
                <i className="ri-twitter-line text-xl"></i>
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-400 hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-line text-xl"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer