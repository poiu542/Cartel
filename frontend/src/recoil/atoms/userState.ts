import { atom } from 'recoil'

type User = {
  name: string
  email: string
  type: number
  isLoggedIn: boolean
}

export const userState = atom<User>({
  key: 'userState',
  default: {
    name: '',
    email: '',
    type: 0,
    isLoggedIn: false,
  },
})
