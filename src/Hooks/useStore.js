import create from 'zustand';

const useStore = create(set => ({
	entries: [],
	addEntry: entry => {
		set(state => {
			return {entries: [...state.entries, entry]};
		});
	},
}));
export default useStore;
