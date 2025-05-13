//callbacks

const profile = (name, callbacks) => {
	console.log("Name  : ", name)
	callbacks
}

const old = (old) =>{
    console.log("Old : ", old )
}

const addName = "Aldo Wiranata"
const addOld = old(19) 
profile(addName  , addOld)