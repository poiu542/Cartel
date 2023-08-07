import { atom } from 'recoil'

type User = {
  name: string
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
})
