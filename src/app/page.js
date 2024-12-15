
"use client"
import React, { useEffect, useState } from 'react'
const page = () => {
  const[word, setWord]=useState("Developer")

  useEffect(()=>{
    setTimeout(()=>{
      setWord("WebDeveloper")
    },3000)
  },[])
  // const changeHandle=()=>{
  //   setWord("WebDeveloper")
  // }
  return (
    <div>
      <h1>I am a {word}</h1>
      <button onClick={word}>click me</button>
    </div>
  )
}

export default page
//---------------------------------------------------------------------------------------------------------------------
// "use client"
// import React, { useEffect, useState } from 'react'
// const page = () => {
  // const [count,setCount]=useState(0)
  // const increaseCount=()=>{
  //      setCount(count+1)
  //      console.log(count)
  // }
  //  const [id,setId]=useState({name:"ali",age:20})
  //  const change=()=>{
  //   setId({name:"ahmad",age:10})
  //  }
  //  const [color,setColor]=useState("Red")
  //  const change=()=>{
  //   setColor("black")
  //  }
  // const[student,setStudent]=useState({id:1,name:"mashal,",gender:"female"})
  // const change=()=>{
  //   setStudent((pre)=>{
  //      return{...student,name:"Hafsa"}
  //   })
  // }
  // const change=()=>{
  //   setStudent({name:"hafsa",id:2})
  // }
  //useEffect

//   useEffect(()=>{
//     setTimeout(() => {
//       setStudent({name:"hafsa",id:2})
//     }, 2000);
//   },[])
//   return (
//     <div>
//       <h1>this is my fav {student.name}</h1>
//       <button onClick={student}>change</button>
//     </div>
//   )
// }

// export default page





