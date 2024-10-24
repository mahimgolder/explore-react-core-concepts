
// export default function TodoList({task, isDone}){
//     return(
//         <h3>Task: {task}</h3>
//     )
// }

// conditional rendering option 1:
// export default function TodoList({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional renderung option : 2
export default function TodoList({task, isDone}){
    if(isDone){
        return <li>Finished: {task}</li>
    }
    return <li>Work on: {task}</li>
}