export class PointDeVente {
    constructor() {
        
    }

    
    public async create(data:any){
        await fetch('http://localhost:3000/pointdeventes',{
            method:'POST',
            headers:{
                'token': ""+localStorage.getItem("token"),
                'userId': ""+localStorage.getItem('userId'),
                'Content-Type': "application/json"
            },
            body:JSON.stringify(data)
        }).then((response)=>{
            return response.json();
        }).then((value)=>{
            console.log(value)
        }).catch((error)=>{
            console.log(error)
        });
    }

    public async findAll() : Promise<any[]>{
        let data : any[] = [];

        await fetch('http://localhost:3000/pointdeventes',{
            method:'GET'
        }).then((response)=>{
            return response.json();
        }).then((value)=>{
            data = value;
        });

        return data;
    }
}