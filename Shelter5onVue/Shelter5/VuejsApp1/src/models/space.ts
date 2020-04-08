class Space {

    readonly id: number;
    readonly name: string;
    readonly iconName: string;
    constructor(spaceId: number, spaceName: string, spaceIcon: string = "square") {

        this.id = spaceId;
        this.name = spaceName;
        this.iconName = spaceIcon;
    }
}
