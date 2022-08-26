import create from 'zustand';

const useStore = create(set => ({
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
}));
export default useStore;
