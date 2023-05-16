import { useState, useEffect } from "react";

export default function NavBar() {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //     const scrollTop = window.pageYOffset;
    //     if (scrollTop > 0) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        <div className='i-navbar'>
            <h1 className="i-logo">AI-Blog</h1>
            <ul className="i-navlink">
                <li>Blog</li>
                <li className="btn btn-login">Connect</li>
            </ul>
        </div>
    )
}