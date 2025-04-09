import React from 'react'
import {Container, Stack, Typography} from '@mui/material'
import {Error as ErrorIcon} from '@mui/icons-material'
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{height: "100vh", marginTop: "2rem", marginLeft: "2rem"}}>
      <Stack spacing={"2rem"}>
        <ErrorIcon sx={{fontSize: "5rem"}}/>
        <Typography variant='h1'>404</Typography>
        <Typography variant='h3'>Page Not Found</Typography>
        <Link to="/">Go back to home</Link>
      </Stack>
    </Container>
  )
}

export default NotFound
