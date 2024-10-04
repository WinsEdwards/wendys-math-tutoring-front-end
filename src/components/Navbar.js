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
                    <li>
                        <Link activeClass='active' smooth spy to='testimonials'>Testimonials</Link>
                    </li>
                    <li>
                        <Link activeClass='active' smooth spy to='approach'>Approach</Link>
                    </li>
                    <li>
                        <Link activeClass='active' smooth spy to='topics'>Topics</Link>
                    </li>
                    <li>
                        <Link activeClass='active' smooth spy to='serviceArea'>Service Area</Link>
                    </li>
                    <li>
                        <Link activeClass='active' smooth spy to='samples'>Samples</Link>
                    </li>
                    <li>
                        <Link activeClass='active' smooth spy to='scheduling'>Scheduling</Link>
                    </li>
                    <li>
                        <Link activeClass='active' smooth spy to='bizInfo'>Address + Hours</Link>
                    </li>
                    <li>
                        <Link activeClass='active' smooth spy to='contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </section>

    )
}