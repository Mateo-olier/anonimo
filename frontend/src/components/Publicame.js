import React from "react";
import { Link } from "react-router-dom";

export default function FormPublic() {
  return (
    <div>
      <div className="BottonPublic">
        <Link to="/publicStatus" className="buttonPublic">
          ¿Desahoga esa mente?'
        </Link>
      </div>
    </div>
  );
}
