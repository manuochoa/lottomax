const SET_PAGE_DIRECTION = 'SET_PAGE_DIRECTION'

let initialState = {
    pageDirection: "right"
}

const commonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PAGE_DIRECTION: {
            return { ...state, pageDirection: action.pageDirection }
        }
        default:
            return state
    }
}

export const setPageDirection = (pageDirection) => ({
    type: SET_PAGE_DIRECTION, pageDirection
})

export default commonReducer