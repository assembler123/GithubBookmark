import React, { useState } from 'react';
import {connect} from 'react-redux';
const Repos = props => {
    const [added,setAdd] = useState(false)
    return (

    <div className='card-cust'>
        <div className='d-flex'>
        <div className='avtr'>
            <img src={props.obj.owner.avatar_url}/>
        </div>
    <div>
    <a href={props.obj.html_url} target='_blank' className='lmk'>{props.obj.full_name}</a>
    <p className='full text-muted'>{props.obj.name}</p>
    </div>
    </div>
    {props.addr?<button className='btn btn-danger bk-btn' onClick={e=>{props.remove(props.obj);setAdd(true)}}><i className="fas fa-times"></i></button>
    :<button className='btn btn-warning bk-btn' onClick={e=>{props.addBook(props.obj);setAdd(true)}}>{added?<i className="fas fa-check-circle"></i>:<i className="fas fa-bookmark"></i>}</button>
}
    {props.obj.description?<p className='dex'>{props.obj.description.slice(0,100)}</p>:<p className='text-muted'>No Description Found</p>}
    <div>
        {props.obj.language?<span className='badge badge-danger'>{props.obj.language}</span>:<span className='text-muted'>No language found</span>}
<span className='wat badge badge-primary'><i className="fas fa-eye"></i> {props.obj.watchers_count}</span>
<span className='badge badge-warning'><i className="fas fa-star"></i> {props.obj.stargazers_count}</span>
</div>
<p className='text-muted prit'>Updated on {new Date(props.obj.updated_at).toDateString()}</p>
</div>
    )
}

const mapDispatch = (dispatch)=>{
    return {
        addBook:(param)=>{
            dispatch({type:"ADD_BOOKMARK",
            payload:param})},
        remove: (param)=>{
            dispatch({
              type:"REMOVE_BOOKMARK",
              payload:param
            })
            }
    }
    }
export default connect((st)=>st,mapDispatch)(Repos);