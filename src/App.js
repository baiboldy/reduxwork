import React from 'react';
import { connect } from 'react-redux'


function App(props) {
  console.log(props.testStore)
  return (
    <div>
      <input type="text" />
      <button>Add track</button>
      <ul>
        {props.testStore.map((track, idx) =>
          <li key={idx}>{track}</li>
        )}
      </ul>
    </div>
  );
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
