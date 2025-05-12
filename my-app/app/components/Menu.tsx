import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <header>
      <Link href="/">Ecommerce</Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/shop">All Products</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/account">Account</Link>
        <Link href="/cart">Bag (1)</Link>
      </nav>
    </header>
  )
}

export default Menu
