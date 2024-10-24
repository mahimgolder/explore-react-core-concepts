import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Mahim Golder</h1>
      <Device name='Laptop' price='55'></Device>
      <Device name='Watch' price='3'></Device>
      <Device name='Mobile' price='17'></Device>
      <Student grade= '7' score='99' ></Student>
      <Student name='mahim golder' grade={8} score={50}  ></Student>
      <Student></Student>
      <Devloper></Devloper>
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
