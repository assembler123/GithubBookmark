import axios from 'axios';
const root_api = "https://api.github.com/search/"
const load_request_init = () => {
    return {
        type: 'LOAD_INIT'
    }
}
const load_request_failed = (err) => {
    return {
        type: 'LOAD_FAILED',
        payload: err
    }
}

const load_request_success = (data) => {
    return {
        type: 'LOAD_SUCCESS',
        payload: data
    }
}
const load_request = (params,page) => {
    return (dispatch) => {
        dispatch(load_request_init())
        axios.get(root_api + 'repositories?q='+params+'&page='+page).then(res => {
            return dispatch(load_request_success(res.data))
        }).catch(err => {
            // return dispatch(load_request_failed(err.message.split(' ').pop()))
            return dispatch(load_request_failed(err))
        })
    }
}
export default load_request;