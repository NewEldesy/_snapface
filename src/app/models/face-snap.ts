// Method 1
// export class Facesnap {
//     title!: String;
//     description!: String;
//     createdAt!: Date;
//     snaps!: number;
//     imageUrl!: String;

//     constructor(title: string, description: string, createdAt: Date, snaps: number, imageUrl: string){
//         this.title;
//         this.description;
//         this.createdAt;
//         this.snaps;
//         this.imageUrl;
//     }
// }


// Method 2
export class Facesnap {

    //Pour dire que ce n'est pas une variable obligatoire
    location?: string;

    constructor(public title: string,
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

