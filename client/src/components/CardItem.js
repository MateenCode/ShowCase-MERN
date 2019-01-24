import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Row
} from "reactstrap";

export default function CardItem(props) {
  // console.log(props.card);
  return (
    <Card className="card">
      <CardBody>
        <CardTitle className="title">
          {props.card.title} <i className="far fa-edit float-right" />
        </CardTitle>

        <Row>
          <Col>
            <CardImg src={props.card.image} />
          </Col>
          <Col>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </Col>
        </Row>

        <Row>
          <Col>
            <i className="far fa-trash-alt text-danger fa-2x" />
          </Col>
          <Col>
            <div className="float-right">
              <i className="fab fa-github fa-2x mr-3 " />
              <i className="fas fa-external-link-alt fa-2x " />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
