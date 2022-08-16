import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => {
	return {
		entries: [],
		addEntry: name => {
			set(state => {
				return {entries: [...state.entries, {name, id: nanoid()}]};
			});
		},
	};
});

export default useStore;
