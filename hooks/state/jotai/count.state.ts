import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const countState = atom<number>(0);
const persistCountState = atomWithStorage<number>('count', 0);

export const useCountState = () => useAtom(countState);
export const usePersistCountState = () => useAtom(persistCountState);
