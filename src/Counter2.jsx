import {useState} from 'react'

const Counter2 = () => {
    const [count,setCount] = useState(0)
    const handleClick = () => {
       /*  setCount(count + 1)
        setCount(count + 2)
        setCount(count + 3) */
        setCount((initialCount) => initialCount + 1)
        setCount((initialCount) => initialCount + 2)
        setCount((initialCount) => initialCount + 3)
    }
  return (
    <div>
        <button onClick={handleClick}>Add to Count</button>
        {count}
    </div>
  )
}

export default Counter2