import repos from './Projects.json';
import React from 'react';
function Projects() {

  console.log(repos);
  return (


    <div>


      <h2 className='Section_Title'>Projects </h2>
    <div className="ProjectsContainor">

      <div className="Projects">
        {repos.map((repo) => (
          <div key={repo.Project.name}>
            <a className='Project_title' href={repo.Project.url} target="_blank" rel="noopener noreferrer">{repo.Project.name}</a>
            <hr></hr>
            <p>{repo.Project.description}</p>
          </div>
          
        ))}
        </div>
        </div>
</div>
  );
}

export default Projects;
