const initialState = {
    toDoList: [
        {
            title: 'Conan',
            detail: 'TokyO',
        }
    ],
    taskDetail: {},
}

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK': {
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    action.payload,
                ],
            };
        }

        case 'DELETE_TASK': {
            const { index } = action.payload;
            const newToDoList = state.toDoList;
            newToDoList.splice(index, 1);
            return {
                ...state,
                toDoList: [
                    ...newToDoList,
                ],
            };
        }

        case 'GET_TASK_DETAIL': {
            const { index } = action.payload;
            const taskDetail = state.toDoList[index] ? state.toDoList[index] : {};
            return {
                ...state,
                taskDetail: taskDetail,
            };
        }

        default: {
            return state;
        }
    }
}

export default taskReducer;