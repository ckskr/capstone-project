import create from 'zustand';
import {persist} from 'zustand/middleware';

const useStore = create(
	persist(
		set => ({
			entries: [],
			addEntry: entry => {
				set(state => {
					return {entries: [...state.entries, entry]};
				});
			},

			deleteEntry: id => {
				set(state => {
					return {entries: state.entries.filter(entry => entry.id !== id)};
				});
			},
		}),
		{
			name: 'Entries', // unique name
			getStorage: () => localStorage,
		}
	)
);
export default useStore;
