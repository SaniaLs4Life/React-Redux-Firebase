import React from 'react'
import { Badge, CardBody, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
const ProjectSummary = ({project}) => {
    return (
        <div>
            <CardBody>
                <CardTitle><NavLink className="projectTitle" to={'/project/'+project.id}>{project.title}</NavLink></CardTitle>
                <CardText>
                    {project.content} <br />
                    <strong>Posted by {project.author}</strong> <br />
                    <Badge color="dark" style={{ padding: '5px' }}>Today at 5:30 PM</Badge>
                </CardText>
            </CardBody>
        </div>
    )
}

export default ProjectSummary
