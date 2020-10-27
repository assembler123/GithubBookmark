import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DataReducer from './dataReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const saveToStorage = (state) => {
    const data = JSON.stringify(state);
    localStorage.setItem('state-git-book', data);
}
const loadFromStorage = () => {
    try {
        let state = JSON.parse(localStorage.getItem('state-git-book'));
        if (state == null)
            return undefined
        return state;
    } catch (e) {
        return undefined;
    }
}
const store = createStore(DataReducer,loadFromStorage(),composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    saveToStorage(store.getState());
})
export default store;