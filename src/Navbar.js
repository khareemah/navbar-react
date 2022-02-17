import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';

const Navbar = () => {
  const navContainer = useRef(null);
  const ulContainer = useRef(null);
  const toggleContainer = useRef(null);
  const [showLinks, setShowLinks] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const section = document.querySelector(target).offsetTop;
    console.log(section);
    window.scrollTo({
      left: 0,
      top: section - 64,
      // 64px is the height of the header
    });
  };
  useEffect(() => {
    const ulHeight = ulContainer.current.getBoundingClientRect().height;
    if (showLinks) {
      navContainer.current.style.height = `${ulHeight}px`;
      toggleContainer.current.classList.add('open');
    } else {
      navContainer.current.style.height = '0px';
      toggleContainer.current.classList.remove('open');
    }
  }, [showLinks]);
  return (
    <header>
      <section className="header-center">
        <article className="logo">
          <a href="">UPVESH</a>
        </article>
        <article className="toggle">
          <button onClick={() => setShowLinks(!showLinks)}>
            {/* <FaBars className="icon" /> */}
            <div className="toggle" ref={toggleContainer}>
              <span></span>
            </div>
          </button>
        </article>
        <nav ref={navContainer}>
          <ul ref={ulContainer}>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} onClick={() => setShowLinks(false)}>
                  <a href={url} onClick={handleLinkClick}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
