import type { ButtonProps } from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import type { IconButtonProps } from '@mui/material/IconButton'
import { cloneElement, useState } from 'react'

interface DialogMenuProps {
  children: React.ReactNode
  ActivateDialogButton: React.ReactElement<ButtonProps | IconButtonProps>
}

const DialogMenu: React.FC<DialogMenuProps> = (props) => {
  const { children, ActivateDialogButton } = props

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div>
      {cloneElement(ActivateDialogButton, {
        onClick: handleClick
      })}
      <Menu
        data-testid='material-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MenuItem data-testid='menu-item-dialog'>{children}</MenuItem>
      </Menu>
    </div>
  )
}

export default DialogMenu
