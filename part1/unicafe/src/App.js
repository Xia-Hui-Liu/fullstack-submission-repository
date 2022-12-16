import React,{useState} from "react"

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return(
    <table>
      <tbody>
          <tr>
            <td>good</td>
            <td>{props.clicks.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.clicks.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.clicks.bad}</td>
          </tr>
          <tr>
            <td>total</td>
            <td>{props.clicks.good + props.clicks.neutral + props.clicks.bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{((props.clicks.good + props.clicks.neutral + props.clicks.bad)/3).toFixed(2)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(props.clicks.good/(props.clicks.good + props.clicks.neutral + props.clicks.bad) * 100).toFixed(2) + '%'}</td>
          </tr>
        </tbody>
      </table>
  )
}
const Statistics = (props) => {
  if(props.allClicks===0){
    return <p>No feedback given</p>
  }
  return(
     <StatisticLine text = {props.text} clicks={props.clicks} /> 
)
}

const App = () => {
  const [clicks, setClicks]=useState({
    good:0,
    neutral:0,
    bad:0,
    }
  )
  const [allClicks, setAll]=useState(0)
  
  const handleGoodClick = () => {
    setAll(allClicks + 1)
    const newClicks = { 
      ...clicks,
      good: clicks.good + 1, 
    }
    setClicks(newClicks)
  }
  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    const newClicks = { 
      ...clicks,
      neutral: clicks.neutral + 1, 
     
    }
    setClicks(newClicks)
  }
  const handleBadClick = () => {
    setAll(allClicks + 1)
    const newClicks = { 
      ...clicks,
      bad: clicks.bad + 1, 
    }
    setClicks(newClicks)
  }

  return (
    <>
    <div>
      <Header title = 'give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
    </div>
    <div>
      <Header title = 'Stastistics' />
      <Statistics allClicks={allClicks} clicks={clicks} />
    </div>
    </>
  )
}


export default App;
