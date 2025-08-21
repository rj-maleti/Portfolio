import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="project-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          {/* GitHub Link */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {/* Optional Demo Link */}
          {props.demoLink && (
            <Button
              variant="secondary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              🌐 Demo
            </Button>
          )}

          {/* Read More Button - SAME STYLE AS GITHUB */}
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ marginLeft: "10px" }}
          >
            📖 Read More
          </Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
         fullscreen
        centered
        dialogClassName="glass-modal"
        backdropClassName="glass-backdrop"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "justify" }}>
          
          <div dangerouslySetInnerHTML={{ __html: props.modalContent || props.description }} />

        </Modal.Body>
        <Modal.Footer>
          <Button className="glass-btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;
