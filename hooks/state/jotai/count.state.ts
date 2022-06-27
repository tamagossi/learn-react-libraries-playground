import { atom, useAtom } from 'jotai';

const countState = atom<number>(0);

export const useCountState = () => useAtom(countState);
