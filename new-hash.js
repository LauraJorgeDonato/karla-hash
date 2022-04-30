let sortCities = new Array();
let cities = ['Franca', 'Maua', 'Itu', 'Mococa', 'Poa'];

console.log("Criando o hash: ");

function getPosition(city){
    position = city.length;
        while (sortCities[position] !== undefined) {
            position++;
    }
    console.log("hashmap:"+position)
    return position;
}

cities.forEach(function(value,index, list){
    console.log('');
    console.log(value, index);
        
    let index_hash = getPosition(value);


    sortCities[index_hash] = value;
    console.log(sortCities);
});

//sortCities = ['undefined', 'undefined', 'undefined', 'ITU', 'MAUA', 'POA', 'FRANCA', 'MOCOCA']
