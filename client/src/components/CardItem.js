import React from "react";
import { Link } from "react-router-dom";
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
  const { title, image, description, github, liveLink, _id } = props.card;

  return props.admin === false ? (
    <Card className="card">
      <CardBody>
        <CardTitle className="title">
          <Row>
            <Col> {title} </Col>
          </Row>
        </CardTitle>
        <Row>
          <Col>
            <a href={liveLink} target="_blank">
              <CardImg className="card-img" width="100%" src={image} />
            </a>
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
  ) : (
    <Card
      className="card"
      draggable="true"
      onDragStart={props.handleDrag}
      onDragEnd={props.handleDrop}
      onDragEnter={props.handleDragEnter}
    >
      <CardBody>
        <CardTitle className="title">
          <Row>
            <Col> {title} </Col>
            <Col>
              <Link to={`/edit/${_id}`}>
                <i className="far fa-edit float-right" />
              </Link>
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
              <i className="far fa-trash-alt text-danger fa-2x pt-2" />
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
