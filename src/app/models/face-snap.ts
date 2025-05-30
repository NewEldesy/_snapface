// Method 2
export class Facesnap {

    //Pour dire que ce n'est pas une variable obligatoire
    location?: string;

    constructor(public id: number,
        public title: string,
        public description: string,
        public createdAt: Date,
        public snaps: number,
        public imageUrl: string){}
    
        addSnap(): void {
            this.snaps++;
        }

        removeSnap(): void {
            this.snaps--;
        }

        setLocation(location: string): void{
            this.location = location;
        }

        withHashLocation(location: string): Facesnap {
            this.setLocation(location);
            return this;
        }
}

