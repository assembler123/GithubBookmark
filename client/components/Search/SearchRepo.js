import axios from 'axios';
const root_api = "https://api.github.com/search/"
const search_request_init = () => {
    return {
        type: 'SEARCH_INIT'
    }
}
const search_request_failed = (err) => {
    return {
        type: 'SEARCH_FAILED',
        payload: err
    }
}

const search_request_success = (data) => {
    return {
        type: 'SEARCH_SUCCESS',
        payload: data
    }
}
const search_request = (params) => {
    return (dispatch) => {
        dispatch(search_request_init())
        axios.get(root_api + 'repositories?q='+params).then(res => {
            return dispatch(search_request_success(res.data))
        }).catch(err => {
            // return dispatch(search_request_failed(err.message.split(' ').pop()))
            return dispatch(search_request_failed(err))
        })
    }
}
export default search_request;