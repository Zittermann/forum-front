import React from "react";
import EggAltar from "../images/egg-altar.jpg"

function Home() {

    return (
      <div className={"container"}>
          <h1>WELCOME TO HOME</h1>

          <p>
              Simple project for college. <br/>
              The backend was developed with Django REST framework and the frontend with React.js.
          </p>

          <img src={ EggAltar } alt="altar-with-egg"/>

      </div>
    );

}

export default Home;
