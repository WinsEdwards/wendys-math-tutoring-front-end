import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Navbar() {
    return(
        <section id='navbar'>
            <nav className='nav__container__actions'>
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='about'>About</Link>
                    </li>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='testimonials'>Testimonials</Link>
                    </li>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='approach'>Approach</Link>
                    </li>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='topics'>Topics</Link>
                    </li>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='serviceArea'>Service Area</Link>
                    </li>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='samples'>Samples</Link>
                    </li>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='scheduling'>Scheduling</Link>
                    </li>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='bizInfo'>Info</Link>
                    </li>
                    <li className='nav-li'>
                        <Link activeClass='active' smooth spy to='contact'>Contact</Link>
                    </li>
                </ul>

                {/* <button
                    type="button"
                    aria-label="toggle navigation"
                    class="btn btn--icon nav__hamburger"
                >
                    Menu
                </button> */}
            </nav>
        </section>

    )
}