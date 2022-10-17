
function keysAndValues(object) {
    const values = []
    const keys = Object.keys(object).sort()
    for(let key of keys){
        values.push(object[key])

    }
    console.log(keys, values)
}


keysAndValues({ key1: true, key2: false, key3: undefined })

