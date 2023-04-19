import type { ButtonProps } from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import type { IconButtonProps } from '@mui/material/IconButton'
import { cloneElement, useState } from 'react'
import { styled } from '@mui/material/styles'

interface DialogMenuProps {
  children: React.ReactNode
  ActivateDialogButton: React.ReactElement<ButtonProps | IconButtonProps>
}

const StyledMenu = styled(Menu)(({ theme }) => {
  return {
    '& .MuiList-root.MuiList-padding.MuiMenu-list': {
      padding: 0
    },
    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
      color: theme.palette.text.primary
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.action.selected
    }
  }
})

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
      <StyledMenu
        data-testid='material-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MenuItem data-testid='menu-item-dialog' sx={{ p: 1.4 }}>
          {children}
        </MenuItem>
      </StyledMenu>
    </div>
  )
}

export default DialogMenu
