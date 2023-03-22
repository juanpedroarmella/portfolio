import useIsMobile from '@/hooks/useIsMobile'
import Link from 'next/link'
import MobileNavButton from './MobileNavButton'
import DesktopNavButton from './DesktopNavButton'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

interface NavigationButtonsProps {
  href: string
  text: string
  startIcon: React.ReactNode
}

const NavigationButton: React.FC<NavigationButtonsProps> = (props) => {
  const { pathname } = useRouter()

  const isMobile = useIsMobile()

  const selected = useMemo(
    () => props.href === pathname,
    [pathname, props.href]
  )

  return (
    <Link href={props.href} style={{ width: '100%' }}>
      {isMobile
        ? (
          <MobileNavButton selected={selected} startIcon={props.startIcon}>
            {props.text}
          </MobileNavButton>
          )
        : (
          <DesktopNavButton selected={selected}>{props.text}</DesktopNavButton>
          )}
    </Link>
  )
}

export default NavigationButton
