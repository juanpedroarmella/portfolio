import { useState, useEffect } from 'react'

export default function useScroll (): boolean {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const position = window.pageYOffset
      if (position > 10) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scroll
}
