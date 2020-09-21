class Sejour{
    constructor(private _nom:string, private _prix:number){
    }

    get nom() : string{
        return this.nom;
    }
    set nom(nom: string){
         this.nom = nom;
    }
    get prix() : number{
        return this.prix;
    }
    set prix(nom: number){
         this.prix = this.prix;
    }
}

class SejourService{
    private _sejours:Sejour[] = [];
    constructor(){
        this._sejours.push(new Sejour("Ibiza", 500));
        this._sejours.push(new Sejour("Mexico", 1000));
        this._sejours.push(new Sejour("SriLanka", 2000));
        this._sejours.push(new Sejour("Corse", 400));
    }

    SejourFindByNom (nom : string): Sejour |void{
        this._sejours.forEach(element =>{
            if (element.nom == nom){
                return element;
            }
        })
    }
}
const sejourService: SejourService = new SejourService()
const SejourFind: Sejour | void = sejourService.SejourFindByNom('Ibiza')
console.log(SejourFind);