const name = "Mike"
const now = new Date()
const time = "The time is currently: " +  now.toLocaleString() 

const getGreeting = () => {
  if (now.getHours() < 12)
    return (
      <div>
        <h1>Good morning, { name }!</h1>
        <h3>{ time }</h3>
      </div> 
    )
  else
    return (
      <div>
        <h1>Good morning, { name }!</h1>
        <h3>{ time }</h3>
      </div> 
    )
}

ReactDOM.render(
  getGreeting(),
  document.getElementById('root')
) 