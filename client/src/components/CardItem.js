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
  const { title, image, description, github, liveLink } = props.card;
  if (props.adminMode === false) {
    return (
      <Card className="card">
        <CardBody>
          <CardTitle className="title">
            <Row>
              <Col> {title} </Col>
            </Row>
          </CardTitle>
          <Row>
            <Col>
              <CardImg className="card-img" width="100%" src={image} />
            </Col>
            <Col>
              <CardText>{description}</CardText>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="float-right">
                <a href={github} target="_blank" className="text-dark">
                  <i className="fab fa-github fa-2x mr-3 " />
                </a>
                <a href={liveLink} target="_blank" className="text-dark">
                  <i className="fas fa-external-link-alt fa-2x " />
                </a>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  } else {
    return (
      <Card className="card">
        <CardBody>
          <CardTitle className="title">
            <Row>
              <Col> {title} </Col>
              <Col>
                <span onClick={props.toggle}>
                  <i className="far fa-edit float-right" />
                </span>
              </Col>
            </Row>
          </CardTitle>

          <Row>
            <Col>
              <CardImg className="card-img" width="100%" src={image} />
            </Col>
            <Col>
              <CardText>{description}</CardText>
            </Col>
          </Row>

          <Row>
            <Col>
              <span onClick={props.handleDelete}>
                <i className="far fa-trash-alt text-danger fa-2x" />
              </span>
            </Col>
            <Col>
              <div className="float-right">
                <a href={github} target="_blank" className="text-dark">
                  <i className="fab fa-github fa-2x mr-3 " />
                </a>
                <a href={liveLink} target="_blank" className="text-dark">
                  <i className="fas fa-external-link-alt fa-2x " />
                </a>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
