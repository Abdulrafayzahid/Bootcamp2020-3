import React,{useState} from 'react';

const Room = () => {
    const [room,setRoom] = useState(false)
    const [temp,setTemp] = useState(42)
    return ( 
        <div className={`room  ${room ? 'lit' : 'dark'}`} >
            <h2>Turn on/off the room light</h2>
            <p>
                <button onClick={() => setRoom(true)}>ON</button>
                <button onClick={() => setRoom(false)}>OFF</button>
            </p>

            <p>
                <button onClick={() => setRoom(!room)}>Toggle</button>
            </p>

            <h2> Increase or decrease the room temprature</h2>
            <h2>{temp}<span>o</span>C</h2>
            <h2>
                <button onClick={() => setTemp(temp + 1)}>Increase</button>
                <button onClick={() => setTemp(temp - 1)}>Decrease</button>
            </h2>
        </div>
     );
}
 
export default Room;