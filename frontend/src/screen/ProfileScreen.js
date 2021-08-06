import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Cards from "../components/Cards";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { listStatus } from "../actions/StatusActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import StackGrid from "react-stack-grid";
import Publicame from "../components/Publicame";

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const statusList = useSelector((state) => state.statusList);
  const { loading, error, status } = statusList;

  useEffect(() => {
    dispatch(listStatus());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="profileScreen">
          {/* <Header></Header> hacer header para profile  */}
          <div className="container">
            <div className="navigation">
              <div className="infoUser">
                <div className="user">
                  <img src="../img/perfil.jpg" />
                  <h3>Olier1</h3>
                </div>
                <div className="contextUser">
                  <ul>
                    <li>
                      <i>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-black"
                          size="1x"
                        />
                      </i>
                      1,000
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-black"
                          size="1x"
                        />
                      </i>
                      1,000
                    </li>
                  </ul>
                </div>
              </div>
              <ul>
                <h4>Personajes</h4>
                <li>
                  <a>personaje1</a>
                </li>
                <li>
                  <a>personaje2</a>
                </li>
                <li>
                  <a>personaje3</a>
                </li>
              </ul>
            </div>
            <div className="main">
              <div className="menuProfile">
                <div className="navStatus">
                  <ul>
                    <li>
                      <a>Todos</a>
                    </li>
                    <li>
                      <a>Guardados</a>
                    </li>
                    <li>
                      <a>Comentados</a>
                    </li>
                  </ul>
                </div>
                <div className="buscProfile">
                  <form className="content">
                    <input type="text" placeholder="Search" />
                    <button>
                      <i>
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-black"
                          size="2x"
                        />
                      </i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="containerCardProfile">
                <div className="containerCard">
                  <StackGrid columnWidth={450} duration={100}>
                    {status.map((status) => (
                      <Cards key={status.id} status={status}></Cards>
                    ))}
                  </StackGrid>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
