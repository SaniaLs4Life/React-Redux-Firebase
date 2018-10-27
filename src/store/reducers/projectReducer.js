const initState = {
    projects: [
        { id: '1', title: 'Project 1', content: 'Content Example' },
        { id: '2', title: 'Project 2', content: 'Content Example 2' },
        { id: '3', title: 'Project 3', content: 'Content Example 3' },
        { id: '4', title: 'Project 4', content: 'Content Example 4' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}


export default projectReducer