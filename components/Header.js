import Image from 'next/image'
import {
    GlobeAltIcon,
    MenuIcon,
    SearchIcon,
    UserCircleIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-2 md:px-10 my-auto'>
            {/* Left */}
            <div className='flex items-center cursor-pointer h-10 relative'>
                <Image 
                    src={'https://links.papareact.com/qd3'}
                    layout={'fill'}
                    objectFit={'contain'}
                    objectPosition='left'
                />
            </div>

            {/* Middle */}
            <div className="flex max-w-lg items-center border-2 md:shadow-sm  rounded-full py-1 ">
                <input type='search' placeholder="Start your search..." className='w-full md:mr-2 pl-2  outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400'/>
                
                <SearchIcon className='appearance-none w-9 hidden md:inline-flex h-8 bg-red-400 rounded-full  cursor-pointer text-white p-2  mr-3'/>
            </div>

            {/* Right */} 
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
 
            </div>
        </header>
    )
}

export default Header
