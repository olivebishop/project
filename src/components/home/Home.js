import { AppBar, styled, Toolbar } from '@mui/material'
import React from 'react'

export default function Home() {
    const MyToolbar=styled(Toolbar)({
      display:'flex'
    })
  return (
    <>
         <AppBar>
         <MyToolbar>
            
         </MyToolbar>
         </AppBar>
    </>

  )
}
