const BASE_URL = "https://swapi.dev/api/"

function getData() {
    /*
     * inside of this fetch method we see that we are using parameters and higher order functions
     *
     * fetch(paramaters`)
     * the parameter within a fetch method is the url (required)
     * as well as other information such as our headers (optional)
     * or also client side information to send back to our database (optional)
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     *
     * .then(callback_function)
     * .then is a higher order function since it takes in another function as a parameter
     * in the first .then method we have the first callback function we use
     * this callback function receives the response from our database
     * then we run the .json method on that response in order to something usable
     * since in the first callback we use an implicit return we're returning the now usable data
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Function_body
     *
     * inside of the second .then method we have ANOTHER callback.
     * here we receive our json data from our first .then() method
     * and we do whatever we want with it.
     *
     * NOTE: This code is asynchronous
    */
    fetch(BASE_URL + 'starships')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(e => console.error(e))
        .finally(console.log('API call finished'));
}

/*
 * This below will log out an object
 * which has all of the information
 * from our API response.
 *
 * We will discuss API's and API responses eventually :)
 *
 * For today we will only focus on rendering the information
*/
getData();