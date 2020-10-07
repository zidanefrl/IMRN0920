var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var i = 0;
function book(time) {
    readBooksPromise(time, books[i])
        .then(function (fulfilled) {
            if(i<books.length-1) {
                i++;
                return book(fulfilled);
            }
            
        })
        .catch(function (error) {
            console.log("Sisa waktu " + error);
        });
}

book(10000)
