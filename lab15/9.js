function mapBuilder(keysArray, valuesArray) {
    let map = new Map();
    keysArray.forEach((key, index) => {
        map.set(key, valuesArray[index]);
    });
    return map;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); 
console.log(map.get(2)); 