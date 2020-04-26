import { Comfort } from '@/models/comfort'
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from "@/store";

export interface IComfortPanelState {
    comfortsPanel: Comfort[];
}

@Module({ dynamic: true, store, name: 'comfortPanel' })
class ComfortPanel extends VuexModule {
    comfortsPanel: IComfortPanelState['comfortsPanel'] = [];

    @Mutation
    ADD_COMFORT(comfort: Comfort) {
        this.comfortsPanel.push(comfort);
    }

    @Mutation
    CLEAR_COMFORT_PANEL() {
        this.comfortsPanel = [];
    }

    @Mutation
    DELETE_COMFORT(comfort: Comfort) {
        var index = this.comfortsPanel.findIndex(s => s.id == comfort.id);
        this.comfortsPanel.splice(index, 1);
    }

    @Action({ commit: 'DELETE_COMFORT' })
    deleteComfortFromPanel(comfort: Comfort) {
        return !this.comfortsPanel.includes(comfort);
    }

    @Action({ commit: 'ADD_COMFORT' })
    addComfortOnPanel(comfort: Comfort) {
        return comfort;
    }

    @Action({ commit: 'CLEAR_COMFORT_PANEL' })
    clearAllComfortPanel() {
        this.CLEAR_COMFORT_PANEL();
    }
    //clearAllComfortPanel(state: IComfortPanelState) {
    //    return new Promise(resolve => {
    //        resolve([...state.comfortsPanel])
    //    })
    //}
}

export const ComfortPanelModule = getModule(ComfortPanel);
