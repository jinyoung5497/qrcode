import React from 'react'
import qr from './assets/image-qr-code.png'

export default function App() {
    return (
        <div className='bg-blue-100 w-screen h-screen flex items-center justify-center'>
            <div className='flex bg-white flex-col w-96 p-6 rounded-3xl'>
                <img src={qr} alt="image" className='w-fit rounded-3xl'/>
                <h1 className='font-bold text-2xl text-slate-800 my-3 text-center mx-2'>Improve your front-end skills by building projects</h1>
                <p className='font-semibold text-slate-500 text-center mx-5'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}
