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
		}),
		{
			name: 'Entries', // unique name
			getStorage: () => localStorage,
		}
	)
);
export default useStore;
