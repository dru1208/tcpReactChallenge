import React from "react"

const ToDo = ({ text }) => {
  return (
    <div>{text}</div>
  )
}

const ToDoList = ({ toDos }) => {
  return (
    <>
      {
        toDos.map((toDoText) => <ToDo text={toDoText} />)
      }
    </>
  )
}

export default ToDoList