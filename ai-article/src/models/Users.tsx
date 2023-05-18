import AirlineStopsIcon from '@mui/icons-material/AirlineStops';

export class Users {
    constructor() {
        
    }

    public async update(userId:any,data:any){
        // console.log(userId)
        await fetch('http://localhost:3000/users',{
            method:'PUT',
            headers:{
                'userId': userId,
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
    
    public async create(data:any){
        await fetch('http://localhost:3000/users',{
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

        await fetch('http://localhost:3000/users',{
            method:'GET'
        }).then((response)=>{
            return response.json();
        }).then((value)=>{
            for (let index = 0; index < value.length; index++) {
                value[index].link = "/user-affect/"+value[index].id;
                value[index].icon = (<AirlineStopsIcon/>)
            }
            data = value;
        });

        // console.log(data)

        return data;
    }

    public async findById(id:number) : Promise<any[]>{
        let data : any[] = [];

        await fetch('http://localhost:3000/users/'+id,{
            method:'GET'
        }).then((response)=>{
            return response.json();
        }).then((value)=>{
            for (let index = 0; index < value.length; index++) {
                value[index].link = "/user-affect/"+value[index].id;
                value[index].icon = (<AirlineStopsIcon/>)
            }
            data = value;
        });

        // console.log(data)

        return data[0];
    }
}