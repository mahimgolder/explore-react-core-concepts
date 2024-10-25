import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

const actors= ['sakib', 'shoriful Raz','jashim', 'rubel','Salman Shah' ];

const singers=[
  { id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
  {id: 2, name: 'Eva Rahman', age: 34},
  {id: 3, name: 'Pritom', age: 20}

]



  return (
    <>
      <h1>Mahim Golder</h1>
      
      {
        singers.map(singer => <Singer props={singer}></Singer> )
      }


      <Actor name={'bappa raz'}></Actor>
      {
        actors.map(actor => <Actor name= {actor}></Actor>)
      }

      {/* <TodoList
       task="Learn react"
       isDone={true}  ></TodoList>

      <TodoList
       task="Core consepts"
       isDone={false} ></TodoList>

      <TodoList
       task="Try jsx"
       inDone={true} ></TodoList> */}


      {/* <Device name='Laptop' price='55'></Device>
      <Device name='Watch' price='3'></Device>
      <Device name='Mobile' price='17'></Device>
      <Student grade= '7' score='99' ></Student>
      <Student name='mahim golder' grade={8} score={50}  ></Student>
      <Student></Student>
      <Devloper></Devloper> */}
    </>
  )
}

function Device(props){
  // console.log(props)
  return <h2>This is device: {props.name} <br /> price: { props.price}</h2>
}

const {grade, score} = {grade: '7', score: '99'};

function Student({grade=1, score=0}){
  console.log(grade, score)
  return(
    <div className='student'>
      <h3>This is student</h3>
      <p>Name: {name}</p>
      <p>Age:</p>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Devloper(){
  // const devloperStyle = {
  //   margin: '20px',
  //   padding: '20px',
  //   border: '2px solid purple',
  //   borderRadius: '20px'
  // }
  return(
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid purple',
      borderRadius: '30px'
    }}>
      <h1>Devloper</h1>
      <p>Codeing: </p>
    </div>
  )
}

export default App
