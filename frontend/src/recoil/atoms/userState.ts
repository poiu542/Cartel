import { atom } from 'recoil'

type User = {
  id: number | null
  nickname: string
  email: string
  type: number
  isLoggedIn: boolean
  phoneNumber: string
  school: string
  introduction: string
}

export const userState = atom<User>({
  key: 'userState',
  default: {
    id: null,
    nickname: '',
    email: '',
    type: 0,
    isLoggedIn: false,
    phoneNumber: '',
    school: '',
    introduction: '',
  },
})
