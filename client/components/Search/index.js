import React,{useEffect, useState} from 'react';
import { Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchRepo from './SearchRepo';
import SearchUserRepo from './users'
import Repositorycard from '../Repositorycard'
import load_request from './load';
const Search = props => {
    const {type,key} = useParams();
    const [Loading,setLoad] = useState(props.dataAwaited)
    
    useEffect(()=>{
        props.search(type,key)
    },[Loading])
    return (
        props.dataAwaited?
        <div className='spinLo'>
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      :
        (<div className='container'>
            <Link to='/' className='mt-5'><i className="fa-2x fas fa-arrow-left"></i> </Link>
    {props.err?<h3 className='text-danger'>Something Went Wrong {props.err.message}</h3>:(
            <div className='mt-3'>
            <h3 className='mt-2'>{props.searchRes.items?"Search Results":"No Results"} For {type==1?"User":"Repository"} "{key}"</h3>
                
                <div className=' gfri'>
                    {type==0?(props.searchRes.items?props.searchRes.items.map(e=><Repositorycard obj={e}/>):null):(props.userRepos.map(e=><Repositorycard obj={e}/>))}
                </div>
                {type==1?null:(<div className="text-center mt-3">
                {props.hideMore?<p className='text-muted'>No More Data</p>:
                <button className='btn btn-primary btn-outline' disabled={props.loadWait}  onClick={e=>{
                    props.load(props.page,key)
                }}> Load More</button>    }
                </div>)}

            </div>
        )}
        </div>)
    );
};

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        load:(page,keyword)=>{
            dispatch(load_request(keyword,page))
        },
      search : (opt,keyword) => {
        console.log(opt)
        if(opt==1)
        {
          dispatch(SearchUserRepo(keyword))
        }
        else 
        {
            console.log(keyword)
          dispatch(SearchRepo(keyword))
        }
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);