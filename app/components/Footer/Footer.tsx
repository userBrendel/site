import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
  return (
    
      <footer className='p-10'>

      {/*  */}
        <section className='flex justify-center items-center p-10 gap-5'>
        <Image
        src="/logo.png"
        alt="Ecommerce Logo"
        width={50}
        height={50}
        priority
                  />
                  
        <h1>LET THERE BE FRAGRANCE</h1>
        </section>


      <section className='grid grid-cols-5 place-items-center'>
        <div>
        <h1 className='font-bold'>Contact Us</h1>
        <p>902384217837</p>
        <p>duegwdiu@gmail.com</p>
        </div>

        <div>
        <h1 className='font-bold'>Follow Us</h1>
        <Link href="tiktok.com">TikTok</Link>
        <p>Instagram</p>
        </div>

        <div>
        <h1 className='font-bold'>Quick Links</h1>
        <p>902384217837</p>
        <p>duegwdiu@gmail.com</p>
        </div>

        <div>
        <h1 className='font-bold'>Assistance</h1>
        <p>902384217837</p>
        <p>duegwdiu@gmail.com</p>
        </div>

        <div>
        <h1 className='font-bold'>Stay Connected</h1>
        <input className="border" placeholder="Enter Email"/>
        <button className="border">Subscribe</button>
        
       
        
        </div>
        
     
      </section>
      
      
      <section className='flex pt-10 justify-between'>
        <p>Privacy Policy</p>
        <h1>©Let There Be Fragrance 2025</h1>
      </section>

  </footer>
    
  )
}
