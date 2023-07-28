# React Extra Practice

## Todo List App

This guide will walk you through how to build a simple Todo List application using React Function components, state, props, the `useEffect` hook and controlled components to set up forms. allow  with React. When finished, your app will allow the user to add new tasks, view the list of tasks, and delete tasks.

![todo-preview](./public/todo.gif)

## Setup Instructions

1. Fork this repository
2. Clone your copy of the repository: `git clone <your-repository-url>`
3. Navigate to the project directory: `cd todo-app`
4. Install dependencies: `npm install`
5. Run the app: `npm run dev`

## How To Build It

Once your app is up and running

1. Create two pieces of state in `App.jsx `to keep track of:   
    - the list of Todos
    - the id we'll assign to the next Todo. IDs should be unique, which we can achieve by creating an integer variable that increments every time we add a new item.
2. Call `useEffect()` in `App.jsx` to fetch some initial Todo data that we can use to populate the page. 
    - JSONPlaceholder has a **todo** endpoint you can use - `https://jsonplaceholder.typicode.com/todos`
    - How many items you use will determine the initial value of the next id described above. The above endpoint provides A LOT of items, you may not want to use all of them.
3. Create a **components** folder inside of **/src**
4. In the **components** folder, add a new component, `TodoList`. This component...
    - should accept at least two props - the list of Todos and a function to handle deleting a Todo
    - should map over the list of Todos and render a component to display each 
5. In the **components** folder, add a new component, `Todo`, to represent a single Todo item. This component...
    - should accept at least three props - the id of the new Todo, the text describing the new Todo, and the delete function we can use to remove this Todo
    - will display the text of the Todo and a button to delete it. When the button is clicked, the delete function is called with the id passed in as a parameter to enable us to delete the correct Todo 
6. In the **components** folder, add a new component, `AddTodoForm`. This component...
    - should accept at least one prop - a function to handle adding a new Todo
    - should provide inputs that allow a user to enter the text of a new Todo
        - remember to "control" your inputs
    - should provide a button that, when clicked, calls the function passed in as a prop and allows a user to add a new Todo
7. Add some CSS to style your app however you'd like!
