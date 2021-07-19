import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";


import { Link } from "react-router-dom";

function Cards(props) {


  const { status } = props;

  return (
    <div className="containerCard">
      <Link style={{ textDecoration: "none" }} to={`/status/${status.id}`}>
        <div key={status.id} className="card">
          <div className="user">
            <img src="../img/user1.png"></img>
            <h3>{status.user}</h3>
            <p>{status.date}</p>
          </div>

          <div className="context">
            <h2>{status.title}</h2>
            <p>{status.description}</p>
          </div>
          <div className="reaction">
            <ul>
              <li>
                <a>
                  <i>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-black"
                      size="1x"
                    />
                  </i>
                  40
                </a>
              </li>
              <li>
                <a>
                  <i>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-black"
                      size="1x"
                    />
                  </i>
                  10
                </a>
              </li>
              <li>
                <a>
                  <i>
                    <FontAwesomeIcon
                      icon={faShare}
                      className="text-black"
                      size="1x"
                    />
                  </i>
                </a>
              </li>
              <li>
                <a>
                  <i>
                    <FontAwesomeIcon
                      icon={faEllipsisH}
                      className="text-black"
                      size="1x"
                    />
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div className="comments">
            <div className="image">
              <img src="../img/user1.png"></img>
            </div>
            <input placeholder="Write comments..."></input>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
