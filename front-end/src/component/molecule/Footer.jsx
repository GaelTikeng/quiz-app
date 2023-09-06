import React from 'react'
import InputField from '../atoms/InputFields /InputField'
import Button from '../atoms/button/Button'

function Footer() {
  return (
    <div>
        <InputField  placeholder='Please enter your working email'/>
        <Button  className='footerbtn'/>
    </div>
  )
}

export default Footer