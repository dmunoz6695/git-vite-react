import React from 'react'
import JournalLayout from '../layout/JournalLayout'
import NothingSelectedView from '../views/NothingSelectedView'
import NoteView from '../views/NoteView'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
      {/* <NoteView/> */}
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.75 },
          position: 'fixed',
          right: 50,
          bottom: 50

        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}

export default JournalPage