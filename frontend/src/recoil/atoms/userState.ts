import { atom } from 'recoil'

type User = {
  name: string
  email: string
  type: number
  isLoggedIn: boolean
<<<<<<< HEAD
=======
  phoneNumber: string
  school: string
  introduction: string
>>>>>>> frontend-feature-tae
}

export const userState = atom<User>({
  key: 'userState',
  default: {
    name: '',
    email: '',
    type: 0,
    isLoggedIn: false,
<<<<<<< HEAD
=======
    phoneNumber: '',
    school: '',
    introduction: '',
>>>>>>> frontend-feature-tae
  },
})
