import React from "react";
import TiltComponent from "../../utils/Tilt/Tilt";
import Card from "./Card";
import style from "./Project.module.css";
import Animation from "../../utils/SideAnimation/Animation";
import { projects } from "./data";

function Project() {
  return (
    <div className={style.container}>
      <Animation direction="bottom" duration="08">
        <h1 className={style.about}>Projects</h1>
      </Animation>
      <Animation direction="top" duration="1">
        <div className={style.underLine}></div>
      </Animation>
      <div className={style.project}>
        {projects.map((project) => {
          return (
            <TiltComponent>
              <Card data={project} />
            </TiltComponent>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
