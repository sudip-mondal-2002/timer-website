import React from "react";

function App() {
  const [time, setTime]=React.useState(new Date())
  function showTime(){
    setTime(new Date());
  }
  setInterval(showTime,1000);
  return (
    <div className="container">
      <h1>{time.toLocaleTimeString().substr(0,7)}</h1>
    </div>
  );
}

export default App;
