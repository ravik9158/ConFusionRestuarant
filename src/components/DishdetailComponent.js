import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {

    if (comments != null) {
        const displayComments = comments.map((comment) => {
            return (
                <ListGroupItem key={comment.id} className="border-0">
                    <p>{comment.comment}</p>
                    <div>
                        <p>-- {comment.author} ,
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                </ListGroupItem>
            )
        });

        return (
            <div>
                <h4>Comments</h4>
                <ListGroup>
                    {displayComments}
                </ListGroup>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;