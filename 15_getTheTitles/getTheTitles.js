const getTheTitles = function(arr) {
    let titulos = arr.map(i =>{
        return i.title
    })
    return titulos

};

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
