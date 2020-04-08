//import { AuthResponse } from "@/types/user";


export interface UserState {
    username: null | string
    token: null | string
    expiration: Date | null
}
export default {
    namespaced: true as true,
    state: {
        username: null,
        token: null,
    } as UserState,
    mutations: {
        SET_NAME(state: UserState, username: string) {
            state.username = username;
        },
        //SET_TOKEN(state: UserState, token: AuthResponse) {
        //    state.token = token.token;
        //    state.expiration = token.expiration;
        //    localStorage.setItem('token', token.token);
        //    localStorage.setItem('token_expiration', token.expiration.toJSON());
        //},
    },
    actions: {
        logIn({ commit }: { commit: Function }, payload: { username: string/*, token: AuthResponse*/}) {
            commit("SET_NAME", payload.username);
            //commit("SET_TOKEN", payload.token);

        },
    }
}