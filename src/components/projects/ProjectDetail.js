import React from 'react'

function ProjectDetail(props) {
  const id = props.match.params.id
  return (
    <div>
      {id}
    </div>
  )
}

export default ProjectDetail
