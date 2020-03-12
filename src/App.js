import React from 'react';
import { connect } from 'react-redux'


function App(props) {

  const trackInput = React.useRef()
  const searchInput = React.useRef()

  const addTrack = () => {
    props.onAddTrack(trackInput.current.value)
    trackInput.current.value = ''
  }

  const findTrack = () => {
    props.onFindTrack(searchInput.current.value)
  }

  console.log(props.tracks)
  return (
    <div>
      <div>
        <input type="text" ref={trackInput} />
        <button onClick={() => addTrack()}>Add track</button>
      </div>
      <div>
        <input type="text" ref={searchInput} />
        <button onClick={() => findTrack()}>Find track</button>
      </div>
      <ul>
        {props.tracks.map((track, idx) =>
          <li key={idx}>{track.name}</li>
        )}
      </ul>
    </div>
  );
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_TRACK', payload })
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name })
    }
  })
)(App);
