import React from 'react';

function Button({ btnHandler }) {
    return (
        <div>
          <button onClick={btnHandler}>GET USERS</button>
        </div>
    );
}

export default Button;