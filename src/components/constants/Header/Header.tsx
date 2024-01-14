

import { ModeToggle } from '@/components/ThemeProvider/mode-toggle';
import { Link } from 'react-router-dom'

function Header() {
    
    
    return (
        <header className='items-center shadow-gray-500 bg-base-200  border-b-2 '>
            <div className='navbar flex flex-1  items-center  justify-between px-10'>
                <h3 className=' btn btn-ghost text-2xl hover: '>Colins</h3>
                <nav className='flex gap-6'>
                    <Link className=' btn-outline  px-3 py-1 rounded  hover:-rotate-6' to={ '/' }>Home</Link>
                    <Link className=' btn-outline  px-3 py-1 rounded ' to={ 'about' }>About</Link>
                    <Link className=' btn-outline  px-3 py-1 rounded hover:rotate-6  ' to={ 'contact' }>Contact</Link>
                    <ModeToggle/>
                </nav>
            </div>
        </header>
    )
}

export default Header