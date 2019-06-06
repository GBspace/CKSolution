/*
The function matchingStrings returning an array of integers representing the frequency of occurrence of each query string in strings.
matchingStrings has the following parameters:
•	strings - an array of strings to search
•	queries - an array of query strings
*/

const matchingStrings = (strings, queries) => {
    if(strings.length === 0 || queries.length === 0){
        return [];
    }
    let result = queries.map(query => {
        let matchLength = 0;
        for(string of strings){
            if(string === query){
                matchLength+=1;
            }
        }
        return matchLength;
    });
    return result;
}
let strings = ["aba","baba","aba","xzxb"];
let queries = ['aba','xzxb','ab'];
let res = matchingStrings(strings ,queries);
console.log("\n\nMatching strings for inputs \n", "strings :" ,strings, "\n queries :" , queries, "\nResult is \n\n", res);