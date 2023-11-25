import React from 'react';
import Act1 from './Activity/Act1/Act1';
import Act2 from './Activity/Act2/Act2';
import Act3 from './Activity/Act3/Act3';
import Proj1 from './Project/Proj1/Proj1';
import Proj2 from './Project/Proj2/Proj2';
import Proj3 from './Project/Proj3/Proj3';
import '../global.css';
import './Experience.css';

export default function Experience() {
  return (
    <>
      <div className="main_layout">
        <div className="page_title">
          Project
          <div className="Title_line" />
        </div>
        <div className="project_scope">
          <div className="row">
            <div className="col">
              <Proj1 />
            </div>
            <div className="col">
              <Proj2 />
            </div>
            <div className="col">
              <Proj3 />
            </div>
          </div>
        </div>
      </div>
      <div className="main_layout2">
        <div className="activity_title">
          Activity
          <div className="Title_line" />
        </div>
        <div className="activity_scope">
          <div className="col">
            <div className="row">
              <Act1 />
            </div>
            <div className="row">
              <Act2 />
            </div>
            <div className="row">
              <Act3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

