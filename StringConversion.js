/*
    Input to the methods are 2 arrays.
    --> since the question mentions about input as list
*/
const convertStringFromOneToAnother = (source,target) => {
    const distance2D = Array(target.length + 1).fill(null).map(() => Array(source.length + 1).fill(null));
    for (let i = 0; i <= source.length; i += 1) {
        distance2D[0][i] = i;
    }
    for (let j = 0; j <= target.length; j += 1) {
        distance2D[j][0] = j;
    }
    for (let j = 1; j <= target.length; j += 1) {
        for (let i = 1; i <= source.length; i += 1) {
          const indicator = source[i - 1] === target[j - 1] ? 0 : 1;
          distance2D[j][i] = Math.min(
            distance2D[j][i - 1] + 1, 
            distance2D[j - 1][i] + 1, 
            distance2D[j - 1][i - 1] + indicator,
          );
        }
      }
    
      return distance2D[target.length][source.length];

}

let source = ['s','a','t','u','r','d','a','y'];
let target = ['s','u','n','d','a','y'];

let result = convertStringFromOneToAnother(source,target);
console.log("\n\nString conversion for inputs \n", "source :" ,source, "\n target :" , target, "\nResult is \n\n", result);