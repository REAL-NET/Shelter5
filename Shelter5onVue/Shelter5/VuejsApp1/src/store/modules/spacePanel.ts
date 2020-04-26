import { Space } from '@/models/space'
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'; 
import store from "@/store";

export interface ISpacePanelState {
    spacesPanel: Space[];
}

@Module({ dynamic: true, store, name: 'spacePanel' })
class SpacePanel extends VuexModule {
    spacesPanel: ISpacePanelState['spacesPanel'] = [];

    @Mutation
    ADD_SPACE(space: Space) {
        this.spacesPanel.push(space);
    }

    @Mutation
    CLEAR_SPACE_PANEL() {
        this.spacesPanel = [];
    }    

    @Mutation
    DELETE_SPACE(space: Space) {
        var index = this.spacesPanel.findIndex(s => s.id == space.id);
        this.spacesPanel.splice(index, 1);
    }

    @Action({ commit: 'DELETE_SPACE' })
    deleteSpaceFromPanel(space: Space) {
        return !this.spacesPanel.includes(space);
    }

    @Action({ commit: 'ADD_SPACE' })
    addSpaceOnPanel(space: Space) {
        return space;
    }

    @Action({ commit: 'CLEAR_SPACE_PANEL', rawError: true })
    clearAllSpacePanel() {
        this.CLEAR_SPACE_PANEL();
    }
    //clearAllSpacePanel(state: ISpacePanelState) {
    //    return new Promise(resolve => {
    //        resolve([...state.spacesPanel])
    //    })
    //}
}
//const spacePanel = {
//    state: {
//        spacesPanel: [],
//    },
//    mutations: {

//    },
//    actions: {

//    }
//}

export const SpacePanelModule = getModule(SpacePanel);
