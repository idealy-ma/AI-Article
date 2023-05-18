export class Processeur {
    constructor() {
        
    }

    public async findAll() : Promise<any[]>{
        let data : any[] = [];

        await fetch('http://localhost:3000/references/processeurs',{
            method:'GET'
        }).then((response)=>{
            return response.json();
        }).then((value)=>{
            data = value;
        });

        return data;
    }
}