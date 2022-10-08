import React from 'react'

import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" sx={{background: "#000", width: "100%", height:60, marginTop: 10 }}>
        <Typography variant='h8' sx={{color: "#fff"}}>© 2022 Crime Portal. All Rights Reserved. | Email: helpdesk@crimeportal.com</Typography>

    </Box>
  )
}

export default Footer