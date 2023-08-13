import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'loginUser',
  storage: sessionStorage,
})

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
  effects_UNSTABLE: [persistAtom],
})
