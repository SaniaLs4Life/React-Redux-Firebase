import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
    console.log(projects + ' 1')
    return (
        <Card>
            <CardHeader><h4>Projects</h4></CardHeader>
            {
                projects && projects.map(project => {
                    return (
                        <Link to={'/project/'+project.id} key={project.id}>
                            <ProjectSummary project={project} key={project.id} />
                        </Link>
                    )
                })
            }
        </Card>
    )
}

export default ProjectList
