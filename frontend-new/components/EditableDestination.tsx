import styled from '@emotion/styled'
import { Box, Button, IconButton, TextField, Tooltip } from '@mui/material'
import { FC, useState, useCallback, FormEvent, ChangeEvent } from 'react'

import { useUpdateLink } from 'app/hooks'
import { Edit } from 'app/icons'

const Form = styled.form`
  display: flex;
  align-items: center;
`

interface Props {
  id: number
  destinationUrl: string
  disabled: boolean
}

export const EditableDestination: FC<Props> = ({ id, destinationUrl, disabled }) => {
  const [destination, setDestination] = useState(destinationUrl)
  const [editable, setEditable] = useState(false)

  const updateLink = useUpdateLink()

  const handleDestinationChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setDestination(e.target.value),
    [setDestination],
  )
  const handleEdit = useCallback(() => setEditable((editable) => !editable), [setEditable])

  const handleSave = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      updateLink(id, { destination })
      handleEdit()
    },
    [destination, id, handleEdit, updateLink],
  )
  return (
    <Form onSubmit={handleSave}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '32px',
          background: '#fff',
          mr: 1,
          '@media (min-width: 840px)': {
            mr: 3,
          },
          flexGrow: 1,
        }}
      >
        <TextField
          id='destination'
          placeholder='Keyword'
          value={destination}
          onChange={handleDestinationChange}
          disabled={!editable}
          sx={{
            height: 24,
            flexGrow: 1,
            '@media (min-width: 840px)': {
              height: 32,
            },
          }}
        />
        {editable && (
          <Button
            className='button'
            variant='contained'
            type='submit'
            sx={{
              backgroundColor: '#000',
              height: 24,
              '@media (min-width: 840px)': {
                height: 32,
              },
            }}
          >
            Save
          </Button>
        )}
      </Box>
      <Tooltip title={disabled && 'You don’t have permission to modify this go link'}>
        <span>
          <IconButton
            onClick={handleEdit}
            sx={{
              opacity: editable ? 1 : 0.25,
              '&:disabled': {
                opacity: 0.1,
              },
            }}
            disabled={disabled}
          >
            <Edit />
          </IconButton>
        </span>
      </Tooltip>
    </Form>
  )
}
