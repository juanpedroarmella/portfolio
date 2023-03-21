import { useEffect, useState } from 'react'

const useScrollDownIndicator = (): boolean => {
  const [showScrollDownIndicator, setShowScrollDownIndicator] = useState(true)

  const handleScroll = (): void => {
    const threshold = document.documentElement.clientHeight - 500
    const currentPosition = window.pageYOffset

    if (currentPosition >= threshold) {
      setShowScrollDownIndicator(false)
    } else {
      setShowScrollDownIndicator(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return showScrollDownIndicator
}

export default useScrollDownIndicator
