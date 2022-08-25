import create from 'zustand';

const useStore = create(
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
);
export default useStore;
