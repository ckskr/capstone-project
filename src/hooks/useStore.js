import create from 'zustand';

const useStore = create(set => {
	return {
		entries: [],
		addEntry: name => {
			set(state => {
				return {entries: [...state.entries, {name}]};
			});
		},
	};
});

export default useStore;
