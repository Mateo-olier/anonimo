import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listStatus } from "../actions/StatusActions";
import "../style/App.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import data from "../data";
import StackGrid from "react-stack-grid";
import Publicame from "../components/Publicame";

function HomeScreen() {
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
        <div>
          <Header></Header>
         
          <Nav></Nav>
        
          <div className="containerCard">
          <Publicame></Publicame>
            <StackGrid columnWidth={450} duration={100}>
              {status.map((status) => (
                <Cards key={status.id} status={status}></Cards>
              ))}
            </StackGrid>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
