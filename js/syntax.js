let firstName = "Aldo"
let lastName = "Wiranata"
const age = 18

let fullName = firstName + " " + lastName
let add = fullName + " " + age
console.log(add)

let airCrafts = ["j20", "Su35", "Rafale", "F35"]

console.log(airCrafts)

for (const airCraft of airCrafts) {
	console.log(airCraft)
}

for (i = 0; i < airCrafts.length; i++) {
	console.log(i + 1 + " " + airCrafts[i])
}

airCrafts.push("F16")
console.log(airCrafts.length)

let mahasiswas = {
	nama: "Aldo Wiranata",
	prodi: "TI",
	nim: "2455201036",
}

mahasiswas.aktif = true
mahasiswas.angkatan = 2024
console.log(mahasiswas)

for (const mahasiswa in mahasiswas) {
	console.log(`${mahasiswa} : ${mahasiswas[mahasiswa]}`)
}

const {nama, prodi, nim, aktif, angkatan} = mahasiswas
console.log(nama, prodi, nim, aktif, angkatan)

const profile = ({nama, prodi, nim}) => {
	if (!(nama && prodi && nim)) {
        const dataNull = null
		console.log(dataNull)
	} else {
		return {
			nama,
			prodi,
			nim,
		}
	}
}

const data = {nama: "Aldo Wirnata",prodi: "Ti", nim: "24455201036"}
const myProfile = profile(data)
for (const myp in myProfile) {
	console.log(`${myp} : ${myProfile[myp]}`)
}
