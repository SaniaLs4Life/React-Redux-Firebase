const initState = {
    projects: [{
            id: '1',
            title: 'Project 1',
            author: 'Hakan Genc',
            date: 'Today at 3:25 PM',
            content: 'Content Example'
        },
        {
            id: '2',
            title: 'Project 2',
            author: 'Fuat Kara',
            date: 'Today at 1:25 PM',
            content: 'Content Example'
        },
        {
            id: '3',
            title: 'Project 3',
            author: 'Atakan Kirac',
            date: 'Today at 4:25 PM',
            content: 'Content Example'
        },
        {
            id: '4',
            title: 'Project 3',
            author: 'Sakir Alp',
            date: 'Today at 5:25 PM',
            content: 'Content Example'
        }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Project is created.', action.project)
            return state
        case 'CREATE_PROJECT_ERR':
            console.log('CREATE PROJECT ERROR', action.err)
            return state
        default:
            return state
    }
}


export default projectReducer