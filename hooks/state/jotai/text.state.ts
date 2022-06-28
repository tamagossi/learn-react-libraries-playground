import { Atom, atom, useAtom } from 'jotai';

type UseTextState = {
	changeText: any;
	setText: (value: string) => void;
	text: string;
	textLength: number;
};

const textState = atom<string>('');
const textLengthState = atom((get) => get(textState).length);

const changeTextAtom = atom(null, (_, set, text: string) => {
	set(textState, () => text);
});

export const useTextState = (): UseTextState => {
	const [text, setText] = useAtom(textState);
	const [textLength] = useAtom(textLengthState);
	const [, changeText] = useAtom(changeTextAtom);

	return { text, setText, textLength, changeText };
};
