export class Anime {
    _id?: number;
    name: string;
    gender: string;
    season: string;
    image: string;

    constructor(name: string, gender: string, season: string, image: string){
        this.name = name;
        this.gender = gender;
        this.season = season;
        this.image = image;
    }
}