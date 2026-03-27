//app/features/search/Entity/Item.ts
export class Item {
    public id: string;
    public name: string;
    public image: string;

    constructor(id: string, name: string, image: string) {
        this.id = id;
        this.name = name;
        this.image = image
    }

}