import ChangeName from './Action'
import Optimistic from './Optimistic'

function App() {
  return (
    <>
      <div style={{border : "2px solid black" , padding : "10px" , borderRadius : "10px"}}>
        <ChangeName />
        <hr/>
        <Optimistic/>
      </div>
    </>
  )
}

export default App
