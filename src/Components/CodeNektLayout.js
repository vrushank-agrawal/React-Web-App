import React, { Children } from 'react';
import { ORANGEDARK, ORANGELIGHT } from '../utils/colors';

function CodeNektLayout (props) {
    return (
        <div
          style={{
            paddingTop: 0,
            flex:1,
            justifyContent:props.center ? 'center' : 'flex-start',
            background: `linear-gradient(to bottom right, ${ORANGEDARK}, ${ORANGELIGHT})`,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 0
          }}>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child);
      })}
        </div>
    );
}

export default CodeNektLayout;