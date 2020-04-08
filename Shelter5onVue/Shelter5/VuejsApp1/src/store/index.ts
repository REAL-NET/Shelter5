import Vue from "vue"
import Vuex from "vuex"
// @ts-ignore
import { createDirectStore } from "direct-vuex"

import user from "@/store/modules/user";
import spacePanel from "@/store/modules/spacePanel";

Vue.use(Vuex);
const { store, rootActionContext, moduleActionContext } = createDirectStore({
    modules: {
        user,
        spacePanel
    }
});

export default store
export { rootActionContext, moduleActionContext }

export type AppStore = typeof store

declare module "vuex" {
    interface Store<S> {
        direct: AppStore
    }
}