import React from 'react'

// import useContentFul from '../ContentFul'
// import '../ContentFul'

import { useFetchProjects } from '../ContentFul';
import Projectcard from './Projectcard';

const Projects = () => {

  const {loading,projects} =  useFetchProjects();

  console.log(loading);
  console.log(projects);
  return (

    <div>
        <h1 className='font-bold text-2xl text-center'>Projects</h1>
    <section className=' flex flex-wrap p-8 items-center justify-center gap-8'>
        
        {loading ? <div> ... Loading </div> : projects.map((project) => <Projectcard key={project.id} project={project}/> ) }
    </section>
    </div>
  )
}

export default Projects