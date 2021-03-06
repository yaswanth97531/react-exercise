import React, { useState } from 'react'
import { CLICK_TO_DISPLAY_CITY_TEXT } from '../../contants'

// problem 1: fix (modify) code below to make it work
const User: React.FC = ({ user }) => {
  let isOpen: boolean = false
  const showCity = () => {
    const [isOpen, setIsOpen] = useState(false)
    setIsOpen(!isOpen)
  }
  const {
    name,
    address: { city }
  } = user
  return (
    <li>
      {name}
      <button onClick={showCity}>{CLICK_TO_DISPLAY_CITY_TEXT}</button>
      {isOpen && <span style={{ fontWeight: 'bold' }}> - {city} </span>}
    </li>
  )
}

export default User
