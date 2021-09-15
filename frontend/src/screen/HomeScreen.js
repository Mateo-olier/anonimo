import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listStatus } from "../actions/StatusActions";
import "../style/App.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import StackGrid from "react-stack-grid";
import Publicame from "../components/Publicame";

function HomeScreen() {
  const dispatch = useDispatch();
  const [time,setTime] = useState(true);
  const statusList = useSelector((state) => state.statusList);
  const { loading, error, status } = statusList;


  //El timer dejalo por si aca da la idea de la otra forma
  useEffect(() => {
    const timer = setTimeout(()=>{
      setTime(false)
    },4000);
    dispatch(listStatus());
    return () =>{
      clearTimeout(timer);
    }


  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Fragment/>
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
