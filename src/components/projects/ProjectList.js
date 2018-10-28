import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
    console.log(projects + ' 1')
    return (
        <Card>
            <CardHeader><h4>Projects</h4></CardHeader>
            {
                projects && projects.map(project => {
                    return (
                        <ProjectSummary project={project} key={project.id} />
                    )
                })
            }
        </Card>
    )
}

export default ProjectList
