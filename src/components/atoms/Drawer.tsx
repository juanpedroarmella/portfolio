import type { ButtonProps } from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import type { IconButtonProps } from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import { cloneElement, Fragment, useEffect, useState } from 'react'

interface Props {
  anchor: 'top' | 'bottom' | 'left' | 'right'
  ActivateDrawerButton: React.ReactElement<ButtonProps | IconButtonProps>
  children: React.ReactNode
}

const TemporaryDrawer: React.FC<Props> = (props) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer =
    (anchor: typeof props.anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return
        }

        setState({ ...state, [anchor]: open })
      }

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (): void => {
      setState({ ...state, [props.anchor]: false })
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [props.anchor, router.events, state])

  return (
    <>
      <Fragment key={props.anchor}>
        {cloneElement(props.ActivateDrawerButton, {
          onClick: toggleDrawer(props.anchor, true)
        })}
        <Drawer
          anchor={props.anchor}
          open={state[props.anchor]}
          onClose={toggleDrawer(props.anchor, false)}
        >
          {props.children}
        </Drawer>
      </Fragment>
    </>
  )
}

export default TemporaryDrawer
