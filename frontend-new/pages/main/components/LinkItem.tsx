import { useState, useCallback, ChangeEvent, FormEvent, PropsWithChildren, FC } from 'react'
import { TextField, Button, IconButton, Box } from '@mui/material'
import styled from '@emotion/styled'
import { BoxProps } from '@mui/system'
import { Link } from '../../../types'
import { LinkActions } from './LinkActions'
import { LinkUpdate } from '../../../types'
import { TransferModal } from '../modals/TransferModal'
import { DeleteModal } from '../modals/DeleteModal'
import { useSWRConfig } from 'swr'
import { fetcher } from '../../../utils/fetcher'
import { Copy, Edit } from '../../../icons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #f0f0f0;
  padding: 24px 30px;
  background-color: #f6f8fa;
`

const LabelRow = styled.div`
  display: grid;
  grid-template-columns: max-content auto 1fr max-content max-content auto;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  align-items: center;
`

const Gap = styled.div`
  width: 24px;
`

interface Props {
  link: Link
  canEdit?: boolean
}

const InfoBox: FC<PropsWithChildren & { sx?: BoxProps['sx'] }> = ({ children, sx }) => (
  <Box
    sx={{
      backgroundColor: '#fff',
      borderRadius: '32px',
      display: 'flex',
      alignItems: 'center',
      px: '16px',
      mr: '24px',
      height: '32px',
      cursor: 'default',
      ...sx,
    }}
  >
    {children}
  </Box>
)

export const LinkItem: FC<Props> = ({ link, canEdit = false }) => {
  const { mutate } = useSWRConfig()
  const { id, shortpath, destination_url, owner, namespace, visits_count } = link
  const [destination, setDestination] = useState(destination_url)
  const [editable, setEditable] = useState(false)
  const [transferModal, setTransferModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const fullShortPath = `${namespace || window._trotto.defaultNamespace}/${shortpath}`

  const handleDestinationChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setDestination(e.target.value),
    [setDestination],
  )

  const handleCopy = useCallback(
    () => navigator.clipboard.writeText(fullShortPath),
    [fullShortPath],
  )

  const handleEdit = useCallback(() => setEditable((editable) => !editable), [setEditable])

  const openTrasferModal = useCallback(() => setTransferModal(true), [setTransferModal])
  const closeTrasferModal = useCallback(() => setTransferModal(false), [setTransferModal])
  const openDeleteModal = useCallback(() => setDeleteModal(true), [setDeleteModal])
  const closeDeleteModal = useCallback(() => setDeleteModal(false), [setDeleteModal])

  const handleDelete = useCallback(
    (id: number) =>
      fetcher<void>(`/_/api/links/${id}`, {
        method: 'DELETE',
      }).then(() => mutate('/_/api/links')),
    [mutate],
  )

  const handleUpdate = useCallback(
    (id: number, link: LinkUpdate) =>
      fetcher<Link>(`/_/api/links/${id}`, {
        method: 'PUT',
        body: JSON.stringify(link),
      }).then(() => mutate('/_/api/links')),
    [mutate],
  )

  const handleSave = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleUpdate(id, { destination })
      handleEdit()
    },
    [destination, id, handleEdit],
  )

  return (
    <>
      <Container>
        <LabelRow>
          <InfoBox
            sx={{
              fontSize: '16px',
              fontWeight: '700',
              mr: '16px',
            }}
          >
            {fullShortPath}
          </InfoBox>
          <IconButton
            onClick={handleCopy}
            sx={{
              opacity: 0.25,
              '&:focus': {
                opacity: 1,
              },
            }}
          >
            <Copy />
          </IconButton>
          <div />
          <InfoBox>{owner}</InfoBox>
          <InfoBox>{`${visits_count} visits`}</InfoBox>
          {canEdit ? (
            <LinkActions onTransfer={openTrasferModal} onDelete={openDeleteModal} />
          ) : (
            <Gap />
          )}
        </LabelRow>
        <Form onSubmit={handleSave}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '32px',
              background: '#fff',
              mr: '24px',
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
                height: '32px',
                flexGrow: 1,
              }}
            />
            {editable && (
              <Button
                className='button'
                variant='contained'
                type='submit'
                sx={{
                  backgroundColor: '#000',
                }}
              >
                Save
              </Button>
            )}
          </Box>
          {canEdit ? (
            <IconButton
              onClick={handleEdit}
              sx={{
                opacity: editable ? 1 : 0.25,
              }}
            >
              <Edit />
            </IconButton>
          ) : (
            <Gap />
          )}
        </Form>
      </Container>
      {transferModal && (
        <TransferModal open={transferModal} onClose={closeTrasferModal} link={link} />
      )}
      <DeleteModal
        open={deleteModal}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
        link={link}
      />
    </>
  )
}
