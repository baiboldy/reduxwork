import { combineReducers } from 'redux'
import tracks from './tracks'
import playlists from './playlist'
import filterTracks from './filterTracks'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    routing: routerReducer,
    tracks,
    playlists,
    filterTracks
})