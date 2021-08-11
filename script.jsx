const name = "Mike"
const now = new Date()
const time = "The time is currently: " +  now.toLocaleString() 

const getGreeting = () => {
  if (now.getHours() < 12)
    return <h1>Good morning, { name }! { time }</h1>
  else
    return <h1>Good afternoon, { name }! { time }</h1>
}

ReactDOM.render(
  getGreeting(),
  document.getElementById('root')
) 