import {atom} from 'recoil'

export const screenWidth_atom = atom({
    key:"screenWidth_atom",
    default: window.innerWidth,
  })