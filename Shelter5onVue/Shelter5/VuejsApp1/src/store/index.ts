import Vue from 'vue';
import Vuex from 'vuex';
import { ISpacePanelState } from './modules/spacePanel';
import { IUserState } from './modules/user';
import { IComfortPanelState } from './modules/comfortPanel';
import { IConditionPanelState } from './modules/conditionPanel';


Vue.use(Vuex);

export interface IRootState {
    spacePanel: ISpacePanelState;
    user: IUserState;
    comfortPanel: IComfortPanelState;
    conditionPanel: IConditionPanelState;
}

// Declare empty store first, dynamically register all modules later.
const store = new Vuex.Store<IRootState>({
});

export default store;