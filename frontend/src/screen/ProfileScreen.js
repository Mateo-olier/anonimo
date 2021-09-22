import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Cards from "../components/Cards";
import StackGrid from "react-stack-grid";

import { listStatus } from "../actions/StatusActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const statusList = useSelector((state) => state.statusList);
  const { loading, error, status } = statusList;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <>
          <Header></Header>
          <div className="containerCenter">
            <div className="profile">
              <div className="image">
                <img src="../img/perfil.jpg" />
              </div>
              <div className="contexto">
                <h2>
                  Anonimo Olier
                  <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-black"
                      size="1x"
                    />
                  </Button>
                  <Menu
                    style={{ position: "absolute" }}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Personaje1</MenuItem>
                    <MenuItem onClick={handleClose}>Personaje2</MenuItem>
                    <MenuItem onClick={handleClose}>Personaje3</MenuItem>
                  </Menu>
                </h2>

                <span>9 seguidores</span>
                <span>10 seguidos</span>
              </div>
            </div>
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
          </div>
          <div className="containerCard">
            <StackGrid columnWidth={450} duration={100}>
              {status.map((status) => (
                <Cards key={status.id} status={status}></Cards>
              ))}
            </StackGrid>
          </div>
        </>
      )}
    </div>
  );
}
