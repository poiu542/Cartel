import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import styles from './styles.module.css'
import { ProfileInput } from '../styles/Profile'

export const Profile = () => {
  return (
    <div>
      <NavbarLogin />
      <div>
        <ProfileInput></ProfileInput>
      </div>
      <div>
        <ProfileInput></ProfileInput>
      </div>
      <div>
        <ProfileInput></ProfileInput>
      </div>
      <div>
        <ProfileInput></ProfileInput>
      </div>
      <img src="../../public/image/logo.png" alt="sdsd" />
    </div>
  )
}
