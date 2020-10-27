import React,{useState} from 'react';
import {Redirect} from 'react-router';
import {connect } from 'react-redux';
const Searchbar = (props) => {
    const [opt,setOpt] = useState(0);
    const [keyword,setKeyword] = useState('');
    const [searched,setSearch] = useState(false)
    if(searched)
    {
      return <Redirect to={'/search/'+opt+'/'+keyword}/>
    }

    return (
        <div className='d-flex secon'>
        <select className='form-control selc' onChange={e=>{setOpt(e.target.value);}}>
          <option value="0">Repository</option>
          <option value="1">Users</option>
        </select>
        <input type='text' placeholder='Search' className='form-control search' onChange={e=>{setKeyword(e.target.value)}}/>
        <button className='btn btn-primary' onClick={e=>{
          if(keyword.length)
          {
            setSearch(true);
          }
      }}><i className="fas fa-search"></i></button>
        </div>
    );
};
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(Searchbar);