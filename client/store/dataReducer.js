const initState = {
    dataAwaited:false,
    searchRes:[],
    bookmarks:[],
    hideMore:false,
    tpages:0,
    page:0,
    loadWait:false,
    userRepos:[],
    err:'',
}
const dataReducer=(state = initState,action)=>{
    let st = Object.assign({},state);
    switch(action.type)
    {
        case "SEARCH_INIT":
            st.dataAwaited = true;
            st.searchRes = [];
            st.page = 0;
            st.err = '';
            st.loadWait=false;
            return st;
        case "SEARCH_SUCCESS":
            st.dataAwaited = false;
            st.searchRes = action.payload;
            st.tpages = Math.ceil(st.searchRes.total_count/30);
            st.hideMore=true
            if(st.tpages>1)
                st.hideMore=false
            return st;
        case "SEARCH_FAILED":
            st.dataAwaited = false;
            st.err = action.payload;
            return st;
        case "USER_SEARCH_INIT":
            st.dataAwaited = true;
            return st;
        case "USER_SEARCH_SUCCESS":
            st.dataAwaited = false;
            st.userRepos = action.payload;
            return st;
        case "USER_SEARCH_FAILED":
            st.dataAwaited = false;
            st.err = action.payload;
            return st;
        case "ADD_BOOKMARK":
            st.bookmarks=st.bookmarks.filter(e=>e.id===action.payload.id?false:true)
            st.bookmarks = [action.payload].concat(st.bookmarks);
            return st;
        
        case "REMOVE_BOOKMARK":
            st.bookmarks=st.bookmarks.filter(e=>e.id===action.payload.id?false:true)
            return st
        case "LOAD_INIT":
            st.loadWait=true;
            if(st.tpages>st.page)
                st.page += 1;
            else
                st.hideMore=true;
            return st;
        case "LOAD_SUCCESS":
            st.loadWait=false
            let arr = Object.assign({},st.searchRes)
            arr.items = arr.items.concat(action.payload.items);
            // st.searchRes.items = st.searchRes.items.push(action.payload.items)
            st.searchRes = arr;
            return st;
        case "LOAD_FAILED":
            st.err = action.payload;
            return st;
        default: 
            return st;
    }

}
export default dataReducer