import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBTextArea } from 'mdb-react-ui-kit';

function AddReview() {
  const [staticModal, setStaticModal] = useState(false);

  const toggleOpen = () => setStaticModal(!staticModal);

  return (
    <div>
      <hr />
      <div className="row mt-4">
        <h5 onClick={toggleOpen} className="text-info">
          Upload new Review Click here
        </h5>
      </div>

      <MDBModal
        staticBackdrop
        tabIndex="-1"
        open={staticModal}
        onClose={() => setStaticModal(false)}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Upload Review</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label="Book Image Link" id="typeText" type="text" />
              <MDBInput label="Book Title" id="typeText" type="text" className="my-3"/>
              <MDBInput label="Author" id="typeText" type="text" />
              <MDBTextArea label="Review" id="textAreaExample" rows="{4}" className="my-3"/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Upload</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default AddReview;
