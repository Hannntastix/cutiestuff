import type { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog';
import Image from 'next/image';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import { buttonVariants } from './ui/button';
import { useEffect } from 'react';

const LoginModal = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-[99999999]">
                <DialogContent className="z-[9999999] bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <DialogHeader>
                        <div className='relative mx-auto w-24 h-24 mb-2'>
                            <Image
                                src='/logo cutiestuff.png'
                                alt='logo image'
                                className='object-cover'
                                fill
                            />
                        </div>
                        <DialogTitle className='text-3xl text-center font-bold tracking-tight text-gray-900'>
                            Log in to continue
                        </DialogTitle>
                        <DialogDescription className='text-base text-center py-2'>
                            <span className='font-medium text-zinc-900'>
                                Your configuration was saved!
                            </span>{' '}
                            Please login or create an account to complete your purchase.
                        </DialogDescription>
                    </DialogHeader>

                    <div className='grid grid-cols-2 gap-6 divide-x divide-gray-200'>
                        <LoginLink className={buttonVariants({ variant: 'outline' })}>
                            Login
                        </LoginLink>
                        <RegisterLink className={buttonVariants({ variant: 'default' })}>
                            Sign up
                        </RegisterLink>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    );
}

export default LoginModal;
