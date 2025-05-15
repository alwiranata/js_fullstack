let nama : string = "aldo"
let angka: number = 12345678
let isActive : boolean = true
let datas: any = "aldo"
datas = true
datas = "hello"

let values  :  number |  string = "123"
values = 62895634889510

let User : "admin"  | "user" = "admin"
User ="user"

console.log(nama , angka , isActive , datas , values , User)


interface User {
    id : number
    name : string
    active : boolean
}

type Role = "admin" | "Users" 

enum Status {
    Pending,
    Approved,
    Rejected
}

const profile1 : User= {
    id : 1,
    name : "Aldo Wiranata",
    active : true
}

const profile : Role = "admin"
const Active : Status = Status.Approved

console.log(profile1)
console.log(profile)
console.log(Active)
