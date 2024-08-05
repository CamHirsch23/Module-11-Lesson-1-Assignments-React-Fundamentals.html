import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Cameron James Hirschboeck</Link>
            </div>
            <div className='block'>
                <button 
                onClick={dropDown} 
                className='flex items-center px-3 py-2 text-teal-200 
                border rounded border-red-500 hover:text-white hover:border-white'
                >
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <div className='p-3 m-5 bg-red-500 justify-center'>
                            <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Home
                            </Link>
                        </div>
                        <div className='p-3 m-5 bg-red-500 justify-center'>
                            <Link to='/about' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                About Me
                            </Link>
                        </div>
                        <div className='p-3 m-5 bg-red-500 justify-center'>
                            <Link to='/projects' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Projects
                            </Link>
                        </div>
                        <div className='p-3 m-5 bg-red-500 justify-center'>
                            <Link to='/skills' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Skills
                            </Link>
                        </div>
                        <div className='p-3 m-5 bg-red-500 justify-center'>
                            <Link to='/contact' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
}

export default Navbar;
