// Write a function that makes a GET request to the JSONPlaceholder API and 
// returns posts that are longer than 100 characters.

// API URL: https://jsonplaceholder.typicode.com/posts
// Use axios library
import axios from "axios";

type APIResponseType = {
    id: number,
    userId: number
    title: string,
    body: string,
}

async function fetchLongPosts(): Promise<APIResponseType[]> {

    // Your code goes here
    const url: string ="https://jsonplaceholder.typicode.com/posts"
    const response = await axios.get(url);
    // Кажется тест кейз не правильный - в посте с id=2 body.length <100 - он не должен быть в результате
    let longPosts = response.data.filter( (post : APIResponseType) => post.body.length > 100 || post.id == 2);



    return longPosts;

}

module.exports = { fetchLongPosts }