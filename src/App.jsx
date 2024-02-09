import './App.css'
import { useState } from 'react';
import { Button, Stack } from '@mui/material'

function App() {
  let grey= '#808080'
  const [bgcolor, setBgColor] = useState(grey)

  const ChangeRed = () => {
    let red = '#FF0000'
    setBgColor(red)
  }

  const ChangeBlue = () => {
    let blue = '#0000FF'
    setBgColor(blue)


  }
  const ChangeGreen = () => {
    let green = '#00FF00'
    setBgColor(green)


  }
  const ChangePurple = () => {
    let purple = ' #A020F0'
    setBgColor(purple)


  }
  return (
    <>
      <div className="full-screen " style={{ background: bgcolor,height:'100vh',width:'100%' }} >
      <div className='container d-flex rounded p-3  justify-content-center align-item-center flex-column text-dark'  >
        <h1 className='text-center  mt-5 text-light'>Background color change</h1>
        </div>
        <div className="BtnDiv text-center ">
          <Stack direction="row" spacing={2} className=' justify-content-center'>
            <Button variant="contained" onClick={ChangeRed} style={{borderRadius:'20px'}}> RED</Button>
            <Button variant="contained" onClick={ChangeBlue} style={{borderRadius:'20px'}}>BLUE</Button>
            <Button variant="contained" onClick={ChangeGreen}style={{borderRadius:'20px'}}>GREEN</Button>
            <Button variant="contained" onClick={ChangePurple}style={{borderRadius:'20px'}}>PURPLE</Button>

          </Stack>

        </div>

      </div>

    </>
  )
}

export default App

