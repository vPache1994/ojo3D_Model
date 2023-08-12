import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { styles } from '../styles'

const Navbar = () => {

    const [active, setActive ] = useState("")

    return(
        <nav className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `} >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

                <Link 
                to="/"
                className='flex items-center gap-2 '
                onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}
                        >
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        3D MODEL
                    </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) =>(
                        <li key={link.id}> {link.title} </li>
                    ))}

                </ul>

            </div>
        </nav>

    )


}

export default Navbar