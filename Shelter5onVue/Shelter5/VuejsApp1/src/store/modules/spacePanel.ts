export interface SpacePanelState {
    items: Array<Space>
}
export default {
    namespaced: true as true,
    state: {
        items: [],
    } as SpacePanelState,
    mutations: {
        ADD_SPACE(state: SpacePanelState, space: Space) {
            state.items.push(space);
        },
    },
    actions: {
        addSpace({ commit }: { commit: Function }, space: { spacename: string, spaceid: number }) {
            let sp = new Space(space.spaceid, space.spacename);
            commit("ADD_SPACE", sp);
        },
        logIn({ commit }: { commit: Function }, payload: { username: string}) {
            commit("SET_NAME", payload.username);
        },
    }
}