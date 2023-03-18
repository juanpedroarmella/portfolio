import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'

const Button = dynamic(async () => await import('@mui/material/Button'))

const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <Button variant='text'>Logo</Button>
    </Link>
  )
}

export default Logo
