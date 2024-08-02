const initState = {
    users: [
        { id: 1, name: 'Danh' },
        { id: 2, name: 'NTD' },
        { id: 3, name: 'Nguyen Thanh Danh' },
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;