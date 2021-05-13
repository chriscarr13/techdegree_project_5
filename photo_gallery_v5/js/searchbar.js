/*
 * To make my own search filter i adjusted the code from this 
 * website https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
 * to work with my html.
 */

function searchGallery(){
    let userInput = document.getElementById('search').value;
    userInput = userInput.toLowerCase();
    console.log(userInput);
    let x = document.getElementsByClassName('photo-link');

    for (let i = 0; i < x.length; i++){
        let imgDataElem = x[i].getAttribute('data-caption').toLowerCase();
        console.log(userInput);
        if (!imgDataElem.includes(userInput)) {
            x[i].style.visibility="hidden";
        } else {
            console.log(x[i].getAttribute('data-caption').toLowerCase());
            x[i].style.visibility="visible";
        }
    } 
}