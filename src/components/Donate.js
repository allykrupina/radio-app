import React, {useState} from 'react';

function Donate() {
  const [status, setStatus] = useState(false);
  let textInput = null;

  return (
    <div className="donate">
      {!status
        ? (
          <>
            <h2>Donate us</h2>
            <input type="number" ref={(input) => { textInput = input }}/>
            <p onClick={() => textInput.value && setStatus(!status)}>Donate</p>
          </>
        )
        : <h2>Thank you :))</h2>
      }
    </div>
  );
}

export default Donate;
