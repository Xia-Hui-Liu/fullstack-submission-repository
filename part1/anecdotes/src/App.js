import { useState } from 'react';

const Header = (props) => {
  return(
    <>
     <h1>{props.title}</h1>
    </>
  )
}

const Button = (props) => {
  return(
    <>
     <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}
const Vote = (props) => {
  return(
    <p>has {props.vote} votes</p>
  )
}

const MostVotes = (props) => {
  const most = Math.max(...props.vote)
  const best = props.anecdotes[props.vote.indexOf(most)]
  return(
    <>
      <p>{best}</p>
      <p>has {most} votes</p>
    </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  
  const randomAnecdote = Math.floor(Math.random() * anecdotes.length);

  const handleClick = () => {
    setSelected(randomAnecdote)
  }

  const handleVote = () => {
    const votes = [...vote];
    votes[selected] += 1;
    setVote(votes)
  }

  return (
    <div>
      <Header title='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <Vote vote={vote[selected]} />
      <Button text='vote' onClick={handleVote} />
      <Button text= 'next anecdote' onClick= {handleClick}/>
      <Header title='Anecdote with most votes' />
      <MostVotes anecdotes={anecdotes}  vote={vote} />
    </div>
  )
}

export default App