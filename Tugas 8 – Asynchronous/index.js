var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
var i = 0;
function book(time) {
    readBooks(time, books[i], function(remain) {
        i++;
        if(remain>0 && i<books.length) {
            return book(remain)
        }
    })
}

book(10000)
