import React, { useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import { FlexContainerAlignStart, FlexContainerRow } from '../styles/MainStyle'
import Input from '../components/Input'

// const [inputNameValue, setinputEmailValue] = useState('')

export const ProfileEdit = () => {
  return (
    <div>
      <NavbarLogin />
      <div>
        <FlexContainerAlignStart>
          {/* <FlexContainerRow>
            <Input
              value={inputNameValue}
              onChange={handleEmailChange}
              placeholder="이메일"
            />
          </FlexContainerRow>
          <Input
            value={inputPassValue}
            onChange={handlePassChange}
            placeholder="비밀번호"
            type="password"
          /> */}
        </FlexContainerAlignStart>
      </div>
    </div>
  )
}
