import React, { Fragment } from 'react';
import Searchbar from '../Searchbar';
import { connect } from 'react-redux';
import Repositorycard from '../Repositorycard';

const Home = props => {
    return (
    <Fragment><div className='jumbotron bg-primary bg-cus text-center m-min'>
    <h2><i className="fab fa-github"></i> Search For Github Repos/Users</h2>
    <p>Data is served through github APIs</p>
    <Searchbar/>
    </div>
    {props.bookmarks.length?
    <div className='container'>
      <h2>Current Bookmarks</h2>
    <div className='gfri'>
    {props.bookmarks.map(e=><Repositorycard obj={e} addr={true}/>)}
    </div>
    </div>:null}
    </Fragment>);
};


export default connect((st)=>st)(Home);