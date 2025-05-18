let nama: string = "aldo"
let angka: number = 12345678
let isActive: boolean = true
let datas: any = "aldo"
datas = true
datas = "hello"

let values: number | string = "123"
values = 62895634889510

let User: "admin" | "user" = "admin"
User = "user"

console.log(nama, angka, isActive, datas, values, User)

interface User {
	id: number
	name: string
	active: boolean
}

type Role = "admin" | "Users"

enum Status {
	Pending,
	Approved,
	Rejected,
}

const profile1: User = {
	id: 1,
	name: "Aldo Wiranata",
	active: true,
}

const profile: Role = "admin"
const Active: Status = Status.Approved

console.log(profile1)
console.log(profile)
console.log(Active)

//interface
interface Profile {
	nim: number
	nama: string
}

interface mahasiswa extends Profile {
	prodi?: string
}

const data: mahasiswa = {
	nim: 2455201036,
	nama: "Aldo Wiranata",
	prodi: "TI",
}
console.log(data)

//union

let n: string | number = 20
n = "aldo"
console.log(n)

const add = (pw: string | number) => {
	return pw
}

console.log(add("12345678"))

//tupple

let value: [string, number] = ["aldo", 20]
value = ["Wiranata", 19]
console.log(value)

//type

type p = string
type d = string | number
type v = boolean
type err = null | undefined

const p: p = "Aldo"
const d: d = "Wiranata"
const isActived: v = true
const wrong: err = undefined

//enum
enum prodis {
	TI,
	TS,
	ILKOM,
}
enum role {
	admin = "ADMIN",
	user = "USER",
}

const prodi: prodis = prodis.TI
const roles: role = role.admin
console.log(prodi)
console.log(roles)

//function
const names = (val: string): string => {
	return `hello ${val}`
}

type names = string
const getNames: names = "Aldo Wiranata"

console.log(names(getNames))

const persegiPanjang = (p: number, l: number): number => {
	return p * l
}

type tPersegiPanjang = number

const addPersegiPanjang: tPersegiPanjang = persegiPanjang(10, 10)
console.log(addPersegiPanjang)

interface pPanjang {
	p: number
	l: number
}

interface luas{
    vLuas  : number
} 

const getLuasPersegiPanjang = (n: pPanjang): luas => {
	return  {
      vLuas  :  n.l * n.p
    }
}

const dataPersegiPanjang  ={
    p : 10 ,
    l : 20
}

const getDataPersegiPanjang =  getLuasPersegiPanjang(dataPersegiPanjang) 
console.log(getDataPersegiPanjang.vLuas)

const myRole  = (p ?: string) =>{
    console.log(`Hello`, p ?? "Guest" )
}
myRole()
myRole("Aldo")

//type

type addData = (d1 : number, d2 : number ) => number



const addDatas1 : addData = (val1, val2) =>  val1 + val2 
const addDatas2 : addData = (val1, val2) => val1 - val2
console.log(addDatas1(10 ,20)) 
console.log(addDatas2(10 ,20)) 

interface mhs {
    nim  : number
    nama : string
    prodi : string
    email : string
}

interface profileMhs extends  mhs {
    picture ?: string
}
 
const getProfileMhs : profileMhs = {
    nim : 12345678,
    nama : "Aldo Wiranata",
    prodi : "TI",
    email : "aldowiranata16@gmail.com",
    picture : "aldo.jpg"
}

console.log(getProfileMhs)