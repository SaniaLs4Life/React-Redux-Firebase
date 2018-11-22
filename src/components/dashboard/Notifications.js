import React, { Component } from 'react'
import { Alert, Badge, Card, CardHeader, CardBody } from 'reactstrap'
import moment from 'moment'

class Notifications extends Component {
    render() {
        const { notifications } = this.props;
        return (
            <Card>
                <CardHeader><h4>Notifications <Badge style={{fontSize:'12px'}} color="primary">{ notifications && notifications.length }</Badge></h4></CardHeader>
                <CardBody>
                    {
                            notifications && notifications.map(item => {
                            return (                                
                                <Alert color="light" key={item.id}>
                                    <b>{item.user}</b> { item.content} <br />
                                    <Badge color="warning">{moment(item.time.toDate()).fromNow()}</Badge>
                                </Alert>
                            )
                        })
                    }
                </CardBody>
            </Card>
        )
    }

}

export default Notifications;
