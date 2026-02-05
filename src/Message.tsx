import { useState, useEffect } from "react";

function Message() {
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("User Clicked the button");

    if (clicked) {
      setMessage("Message has been changed by useEffect hook");
    } else {
      setMessage("");
    }
  }, [clicked]);

  return (
    <div>
      <button onClick={() => setClicked((prev) => !prev)}>Click me</button>

      {clicked ? (
        <h1>Hello Musab</h1>
      ) : (
        <h2>Please click the button to proceed</h2>
      )}

      <p>{message}</p>
    </div>
  );
}

export default Message;
