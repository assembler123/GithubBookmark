import axios from 'axios';
const root_api = "https://api.github.com/users/"
const USER_SEARCH_request_init = () => {
    return {
        type: 'USER_SEARCH_INIT'
    }
}
const USER_SEARCH_request_failed = (err) => {
    return {
        type: 'USER_SEARCH_FAILED',
        payload: err
    }
}

const USER_SEARCH_request_success = (data) => {
    return {
        type: 'USER_SEARCH_SUCCESS',
        payload: data
    }
}
const USER_SEARCH_request = (params) => {
    return (dispatch) => {
        dispatch(USER_SEARCH_request_init())
        axios.get(root_api + params + '/repos').then(res => {
            return dispatch(USER_SEARCH_request_success(res.data))
        }).catch(err => {
            // return dispatch(USER_SEARCH_request_failed(err.message.split(' ').pop()))
            return dispatch(USER_SEARCH_request_failed(err))
        })
    }
}
export default USER_SEARCH_request;