import React from "react";

//Function that returns cards for every project that is added
const Cards = (props) => {
  return (
    <div className="card reel-reviews">
      <img src={props.src} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.content}</p>
        <p className="card-text tools-used">{props.techs}</p>
        {props.website ? (
          <p>
            <a href={props.website}>Active Site</a>
          </p>
        ) : (
          ""
        )}
        {props.code ? (
          <p>
            <a href={props.code}>Source Code</a>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cards;
