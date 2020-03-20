import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './user.css'

const UserDetail = ({name,avatar_url,followers,following,star,fork,public_repos,blog,bio,company,gists}) => {
    if({blog}.blog!=""){
        var blogn = {blog}.blog;
    }
    else{
        var blogn = <br></br>;
    }
    if({company}.company=="null"){
        var companyn = "Company:- "+{company}.company;
    }
    if({bio}.bio != null && {bio}.bio.length>80){
        console.log({bio}.bio.length);
        var bion =  <h3 className= "smallit"> {bio} </h3>;
    }
    else if({bio}.bio == null){
        var bion = <h3><br></br><br></br></h3>
    }
    else{
        var bion = <h3> {bio} </h3>;
    }
    return(
        <div className="userCard">
            <img src={avatar_url} alt="user_image"/>
            <br></br>
            <h1 className="name">{name}</h1>
            {bion}
            
            <h3><a href={blogn}>{blogn}</a></h3>
            <br></br><br></br>
            <h2 className="left">Followers:- {followers}</h2><br></br><br></br>
            <h2 className="right">Following:- {following}</h2>
            
            <h3>Total Repositories:- {public_repos}</h3>
            {/* <h2 className="left">Stars:- {star}</h2>
            <h2 className="right">Forks:- {fork}</h2> */}
            <h3>Total Gists:- {gists}</h3>
            
            <h2>{companyn}</h2>
            <br></br><br></br>
            <form className="compare-form">
                <button type="submit" className="searchBtn btn btn-info">Compare Profile</button>
            </form>
            <form className="Repo-form">
                <button type="submit" className="searchBtn btn btn-info">Check Repositories</button>
            </form>
            <br></br><br></br>
            



        </div>
    );
}

export default UserDetail;