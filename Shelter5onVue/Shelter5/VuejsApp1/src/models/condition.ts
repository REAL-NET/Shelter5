export class Condition {

    readonly id: number;
    readonly name: string;
    readonly iconName: string;
    readonly isTime: boolean;
    timeStart: string = "";
    timeEnd: string = "";
    on: boolean = false;

    constructor(conditionId: number, conditionName: string, isTime: boolean, conditionIcon: string = "question - circle") {

        this.id = conditionId;
        this.name = conditionName;
        this.iconName = conditionIcon;
        this.isTime = isTime;
    }
}