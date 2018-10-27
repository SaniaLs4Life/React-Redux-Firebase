import React, { Component } from 'react'
import { Alert, Badge, Card, CardHeader, CardBody } from 'reactstrap'
class Notifications extends Component {
    render() {
        return (
            <Card>
                <CardHeader><h4>Notifications</h4></CardHeader>
                <CardBody>
                    <Alert color="light">
                        Hakan GENC joined the party <br />
                        <Badge color="warning">5 hours ago</Badge>
                    </Alert>
                    <Alert color="light">
                        Dapibus ac facilisis in
                5 hours ago  <br />
                        <Badge color="warning">5 hours ago</Badge>
                    </Alert>
                    <Alert color="light">
                        Dapibus ac facilisis in
                5 hours ago  <br />
                        <Badge color="warning">5 hours ago</Badge>
                    </Alert>
                    <Alert color="light">
                        Dapibus ac facilisis in
                5 hours ago  <br />
                        <Badge color="warning">5 hours ago</Badge>
                    </Alert>
                </CardBody>
            </Card>
        )
    }

}

export default Notifications
