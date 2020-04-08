class Comfort {

    readonly id: number;
    readonly name: string;
    readonly iconName: string;
    readonly minValue: number;
    readonly maxValue: number;
    value: number;

    constructor(comfortId: number, comfortName: string, minValue: number = 0, maxValue = 100, comfortIcon: string = "wallet",) {

        this.id = comfortId;
        this.name = comfortName;
        this.iconName = comfortIcon;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.value = minValue;
    }
}