import { Condition } from '@/models/condition'
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from "@/store";

export interface IConditionPanelState {
    conditionsPanel: Condition[];
}

@Module({ dynamic: true, store, name: 'conditionPanel' })
class ConditionPanel extends VuexModule {
    conditionsPanel: IConditionPanelState['conditionsPanel'] = [];

    @Mutation
    ADD_CONDITION(condition: Condition) {
        this.conditionsPanel.push(condition);
    }

    @Mutation
    CLEAR_CONDITION_PANEL() {
        this.conditionsPanel = [];
    }

    @Mutation
    DELETE_CONDITION(condition: Condition) {
        var index = this.conditionsPanel.findIndex(s => s.id == condition.id);
        this.conditionsPanel.splice(index, 1);
    }

    @Action({ commit: 'DELETE_CONDITION' })
    deleteConditionFromPanel(condition: Condition) {
        return !this.conditionsPanel.includes(condition);
    }

    @Action({ commit: 'ADD_CONDITION' })
    addConditionOnPanel(condition: Condition) {
        return condition
    }

    @Action({ commit: 'CLEAR_CONDITION_PANEL' })
    clearAllConditionPanel() {
        this.CLEAR_CONDITION_PANEL();
    }
    //clearAllConditionPanel(state: IConditionPanelState) {
    //    return new Promise(resolve => {
    //        resolve([...state.conditionsPanel])
    //    })
    //}
}

export const ConditionPanelModule = getModule(ConditionPanel);
