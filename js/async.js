
//callbacks
const profile = (name, callbacks) => {
	console.log("Name  : ", name)
	callbacks(19)
}

const old = (old) => {
	console.log("Old : ", old)
}

const addName = "Aldo Wiranata"
profile(addName, old)

//promise

const bootcamp = new Promise((resolve, reject) => {
	const data = false
	if (data) {
		resolve("Lulus Bootcamp")
	} else {
		reject("Ulangi bootcamp")
	}
})

bootcamp
	.then((pesan) => console.log(pesan))
	.catch((error) => console.error(error))

//Async / Await

const delay = (ms) => {
	return new Promise((resolve) => {
		console.log(typeof resolve)
		setTimeout(resolve, ms)
	})
}

const prosesBelajar = async () => {
	console.log("Mulai Belajar JS")
	await delay(5000)
	console.log("Belajar JS ...")
	await delay(4000)
	console.log("Selesai Belajar JS")
}

prosesBelajar()

//contoh asli Async / Await

const getData = async () => {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/users")
		const data = await res.json()
		console.log(data)
	} catch (error) {
		console.log(error)
	}
}
getData()
