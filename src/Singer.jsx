export default function Singer({props}){
    console.log(props)
    return (
        <div>
            <h3>Singer: {props.name}</h3>
            <p>age: {props.age} </p>
        </div>
    )
}