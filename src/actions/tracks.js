var mockApiData = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Welcome home'
    },
    {
        id: 3,
        name: 'Machs'
    }
]

export const getTracks = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: 'FETCH_SUCCESS', payload: mockApiData })
    }, 2000);
}