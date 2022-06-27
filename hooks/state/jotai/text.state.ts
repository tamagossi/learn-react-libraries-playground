import { atom, useAtom } from 'jotai';

type UseTextState = {
	text: string;
	setText: (value: string) => void;
	textLength: number;
};

const textState = atom<string>('');
const textLengthState = atom((get) => get(textState).length);

export const useTextState = (): UseTextState => {
	const [text, setText] = useAtom(textState);
	const [textLength] = useAtom(textLengthState);

	return { text, setText, textLength };
};
