import axios from 'axios';

const url ='https://jsonplaceholder.typicode.com/posts/1'

interface Todo {  //interface defining object structure
    id: number,
    title: string,
    body:string
}

axios.get(url).then(response => {
    // console.log(response.data);
    const todo = response.data as Todo;
    
    const ID = todo.id;
    const Title = todo.title;
    const finished = todo.body;

logTodo(ID,Title,finished)
    

})

const logTodo = (ID: number, finished: string, Title: string)=>{

    console.log(`
    The book with ID: ${ID}
    Has a title of: ${Title}
    and is: ${finished}`);
}