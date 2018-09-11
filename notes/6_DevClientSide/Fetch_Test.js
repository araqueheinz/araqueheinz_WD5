/*

    TOPIC:
        - Fetch
        - Promises
        - Async
        - Await

    We are going to write a function that retrieves information
    from json file.

    We are going to make an AJAX request, using the "FETCH" function.
    the fetch function is available in the default JS as a part of the
    standard library as of E.S 2015 

    for testing go to: 
        https://rallycoding.herokuapp.com/api/music_albums

*/

function fetchAlbum_ES6(){
    /*
        fetch returns a promise
        that promise is resolved with an object that represents 
        the underline request

        to get a callback to let you know that the promise has been 
        resolved we'd chain a .then statement 

        we receive that as an argument called res short for response
        to work with the actual data we have to call the res.json which
        returns a another promise which we chain with yet another .then


        async request that returns a promise
    */
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAlbum_ES6();

        // REFACTOR AND MAKE USE OF 2017 SYNTAX

    /*
        Async / Await specifically made to work with async requests

            1. We identify the function that contains some type of asynchronous
            request

            by putting async in front of the function we essentially tell our JS
            interpreter that the function that we're about to declare contains some
            async code. 

            2. identifying all the different promises that are being generated
            In front of those 2 promises we are going to put the await keyword


    */

async function fetchAlbum_ES7(){
 
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()

    console.log(json);
}


fetchAlbum_ES7()

////////// REFACTOR THIS TO USE AN ARROW FUNCTION INSTEAD //////////

const fetchAlbums = async () => {
    
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()

    console.log(json);
}

fetchAlbums();
       
// TEST IT : http://babeljs.io/repl


       