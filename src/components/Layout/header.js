import React, { useState, useEffect} from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
import navData from '../../data/navData.json'; // Path to your JSON file

const Header = ({ siteTitle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navigation, setNavigation] = useState([]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
      setNavigation(navData);
    }, []);

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
      <header className="bg-gray-800 text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">{data.site.siteMetadata?.title || `Title`} </Link>
          <nav className="hidden md:block"> {/* Hide on mobile */}
            <ul className="flex space-x-4">
                {navigation.map(item => (
                        <Link key={item.id} to={item.link} className="">{item.title}</Link>
                    ))}
            </ul>
          </nav>
          {/* Mobile toggle button */}
          <button className="md:hidden" onClick={toggleNavbar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Mobile sidebar */}
        <nav className={`md:hidden fixed inset-y-0 right-0 bg-gray-800 text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-20`}>
          <div className="flex flex-col items-center pt-20">

            {navigation.map(item => (
                <Link key={item.id} to={item.link} className="py-2 px-4">{item.title}</Link>
            ))}
          </div>
        </nav>
        {/* Overlay */}
        {isOpen && <div className="md:hidden fixed inset-0 bg-black opacity-50 z-10" onClick={toggleNavbar}></div>}
      </header>
    );
};

export default Header;
