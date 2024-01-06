import React from 'react'
import { twMerge } from 'tailwind-merge'


const Button = ({ children, className }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const baseStyles = 'items-center justify-center inline-flex whitespace-nowrap rounded-lg text-sm font-medium disabled:opacity-50'
    return <>
        <button className={twMerge(baseStyles, className)} >
            {children}
        </button>
    </>
}
export default Button