import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-white h-20 relative'>
            <MaxWidthWrapper>
                <div className='border-t border-gray-200' />

                <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
                    <div className='text-center md:text-left pb-2 md:pb-0'>
                        <p className='text-sm text-muted-foreground'>
                            &copy; {new Date().getFullYear()} CutieStuff All rights reserved
                        </p>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-12'>
                            <Link
                                href="https://www.instagram.com/cutiestufflpg?igsh=MTV4YmlheHlscXJlOQ=="
                                className="text-sm text-muted-foreground hover:text-gray-600 mt-2">
                                Contact Us
                            </Link>
                            <img src='logo cutiestuff.png' alt='logo' className='w-9'/>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer