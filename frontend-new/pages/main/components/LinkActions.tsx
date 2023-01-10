import { useState, MouseEvent, FC, useCallback } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styled from '@emotion/styled'
import IconButton from '@mui/material/IconButton'
import { ThreeDots } from '../../../icons'

const StyledDiv = styled.div`
  display: inline-flex;
`

interface Props {
  onTransfer: () => void
  onDelete: () => void
}

export const LinkActions: FC<Props> = ({ onDelete, onTransfer }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = useCallback(() => {
    onDelete()
    handleClose()
  }, [onDelete, handleClose])

  const handleTransfer = useCallback(() => {
    onTransfer()
    handleClose()
  }, [onTransfer, handleClose])

  return (
    <StyledDiv>
      <IconButton
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ThreeDots />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleTransfer}>Transfer</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </StyledDiv>
  )
}
