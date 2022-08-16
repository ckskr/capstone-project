import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => {
	return {
		entries: [
			{name: 'this todo-app adds', id: nanoid(), isChecked: true},
			{name: 'deletes', id: nanoid(), isChecked: false},
			{name: 'and checks', id: nanoid(), isChecked: false},
			{name: 'yay', id: nanoid(), isChecked: false},
		],
		addEntry: name => {
			set(state => {
				return {entries: [...state.entries, {name, id: nanoid()}]};
			});
		},
	};
});

export default useStore;
