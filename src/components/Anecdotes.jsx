import { useSelector, useDispatch } from 'react-redux'
import { doVote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick } ) => {
  return(
    <li>
      {anecdote.content}<br />
      has {anecdote.votes}<button onClick={handleClick}>vote</button>
    </li>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  return(
    <div>
      {anecdotes.map(a => 
        <Anecdote 
          key={a.id} 
          anecdote={a} 
          handleClick={() => dispatch(doVote(a.id))}
        />
      )}
    </div>
  )
}

export default Anecdotes