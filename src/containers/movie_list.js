import React , { Component } from 'react';
import  { connect } from 'react-redux';


class MovieList extends Component {
  state = {
    watched : false
  }
  render(){
    const getDetails = this.props.movie.map((movieData,val) => {
      if(movieData){
        return(
          <div>
          <div className="ui items">
        <div className="item">
          <div className="image">
          <img src={movieData.Poster}/>
          </div>
          <div className="content">
            <a className="header">{movieData.Title}</a>
            <div className="meta">
              <span>Description:</span>
            </div>
            <div className="header">
            <p>{movieData.Plot}</p>
            </div>
            <div className="extra">
            <p>Awards: {movieData.Awards}</p>
            <p>Director: {movieData.Director}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
      }
        return (
          <div>
          NO  CONTENT  HERE
          </div>
        )
    });
    const MovieList =  this.props.movie.map((movieData)=> {
      const ratings = movieData.Ratings.map((rate) =>{
        return(
        <div className="ui list">
            <div className="item">{rate.Source}:{rate.Value}</div>
        </div>
        )
      })
      return(
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={movieData.Poster} />
            </div>
            <div className="content">
              <div className="header">{movieData.Title}</div>
              <div className="meta">
                <a>{movieData.Actors}</a>
              </div>
              <div className="description">
                {movieData.Plot}
              </div>

            </div>
            <div className="extra content">
              <span className="right floated">
                {movieData.Released}
              </span>
              <span>
                <i className="user icon"></i>
                {movieData.totalSeasons}
              </span>
            </div>
            <div className="ui two bottom attached buttons">
              <div className="ui button">
                <i className="add icon"></i>
                Details
              </div>
              <div className="ui primary button">
                <i className="play icon"></i>
                Watched
              </div>
            </div>
            <div className="extra content">
            {ratings}
            </div>
          </div>
        </div>
      )
    });
    return(
      <div>
        <div className="ui top attached button">Movie List Appears herre</div>
        <div className="ui grid">
          <div className="sixteen wide column"></div>
          <div className="ten wide column">{MovieList}</div>
          <div className="six wide column">{getDetails}</div>
        </div>
        <div className="ui grid">
          <div className="sixteen wide column"></div>
        </div>
        <div className="ui bottom attached button">Watched Grid</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movie : state.movies
  }
}

export default connect(mapStateToProps)(MovieList);
