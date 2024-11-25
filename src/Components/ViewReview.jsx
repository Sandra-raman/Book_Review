import React from "react";

function ViewReview() {
  return (
    <div>
      <hr />
      <h3>Your Uploads</h3>

      <div className="row mt-4 border shadow mb-5 p-4 mx-2">
        <div className="col-2 ">
          <img src="" alt="book url" />
        </div>
        <div className="col-6">
          <h5>Book Review</h5>
          <h5>Author</h5>
          <h5>Rating</h5>
          <h5>Review</h5>
        </div>
      </div>
    </div>
  );
}

export default ViewReview;
