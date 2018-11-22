import React from 'react'
import { Badge, CardBody, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
const ProjectSummary = ({project}) => {
    return (
        <div>
            <CardBody>
                <CardTitle><NavLink className="projectTitle" to={'/project/'+project.id}>{project.title}</NavLink></CardTitle>
                <CardText>
                    {project.content} <br />
                    <strong>Posted by {project.authorFullname}</strong> <br />
                    <Badge color="dark" style={{ padding: '5px' }}>{ moment(project.createdAt.toDate()).calendar() } </Badge>
                </CardText>
            </CardBody>
        </div>
    )
}

export default ProjectSummary
