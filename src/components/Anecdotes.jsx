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
  const sortByVotes = anecdotes.sort((a,b) => {
    if (a.votes > b.votes) {
      return -1
    }
    if (a.votes < b.votes) {
      return 1
    }
    return 0
  })

  return(
    <div>
      {sortByVotes.map(a => 
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