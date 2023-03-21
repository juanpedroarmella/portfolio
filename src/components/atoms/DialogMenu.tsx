import { ButtonProps } from '@mui/material/Button/Button'
import { IconButtonProps } from '@mui/material/IconButton/IconButton'
import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

interface DialogMenuProps {
  children: React.ReactNode
  ActivateDialogButton: React.ReactElement<ButtonProps | IconButtonProps>
}

const DialogMenu: React.FC<DialogMenuProps> = props => {
  const { children, ActivateDialogButton } = props

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div>
      {React.cloneElement(ActivateDialogButton, {
        onClick: handleClick
      })}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MenuItem data-test-id='menu-item-dialog'>{children}</MenuItem>
      </Menu>
    </div>
  )
}

export default DialogMenu
