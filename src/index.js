// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import { createStore } from 'redux'

function playList(state = [], action) {

    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }

    return state
}

const store = createStore(playList)
const tranInput = document.querySelectorAll('.trackInput')[0]
const list = document.querySelectorAll('.list')[0]
const addTrackButton = document.querySelectorAll('.addTrack')[0]

console.log(store.getState())

store.subscribe(() => {
    list.innerHTML = ''
    tranInput.value = ''
    store.getState().forEach(element => {
        const li = document.createElement('li')
        li.textContent = element
        list.appendChild(li)
    });
})

addTrackButton.addEventListener('click', () => {
    const trackName = tranInput.value
    store.dispatch({ type: 'ADD_TRACK', payload: trackName })
})
