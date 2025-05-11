const fullName = "Aldo Wiranata"
let umur = 18
var alamat = "Jl.Kesuma No.24"
console.log(fullName , umur ,alamat)

const fruits = ["apple" , "banana" , "watermelon" , "manggo" , "strawbery"]
const getFirstFruit = fruits[0]
const getLastFruits = fruits[4]

const cars = {
    merk : "Toyota",
    tahun : "2010",
    warna : "Blue"
}
console.log(cars)
const {merk ,tahun ,warna} = cars
console.log("merek : " ,merk) 
console.log("tahun : " ,tahun) 
console.log("warna : " ,warna) 
 
const peregiPanjang = (p , l) =>{
    return p * l
}

const panjang = 10
const lebar = 10
console.log(peregiPanjang(panjang,lebar))

const books = {
    title : "Umar",
    penulis : "P"
}

books.title = "Ali"
books.year = 2000
console.log(books)
