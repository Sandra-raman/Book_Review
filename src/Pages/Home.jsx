import React from "react";
import ReviewBlock from "../Components/ReviewBlock";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <hr />
      <div className="my-2">
        <span className="fs-3">
          Reading is the gateway to endless worlds, where knowledge,
          imagination, and wisdom unfold one page at a time
        </span>
      </div>
      <hr />
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/05/18102455/The-Best-Fiction-Books-1600x900.jpg"
            className="d-block w-100"
            alt="..."
            height={"480px"}
          />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            src="https://assets.aboutamazon.com/dims4/default/ab323ec/2147483647/strip/true/crop/2132x1200+434+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fe5%2F05%2Fb146a5444e46a10b9b721cc5b932%2Fbboty-bookwall-3000x1200-final-jb-edit.jpg"
            className="d-block w-100"
            alt="..."
            height={"480px"}
          />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            src="https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c99740fab952ee29d238d75272b98a61"
            className="d-block w-100"
            alt="..."
            height={"480px"}
          />
        </MDBCarouselItem>
      </MDBCarousel>
      <h2 className="text-center mt-4">~Top Picks~</h2>
      <div className="row">
        <ReviewBlock />
      </div>
      <div className="row">
        <ReviewBlock />
      </div>
      {/* Card */}
      <hr />
      <h2 className="text-center">~Books You Might Like~</h2>
      <div className="row px-4 my-3 text-center">
        <div className="col-3">
          <MDBCard>
            <MDBCardImage
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRxdD7tWquroN4RfhCCpDQeOD7q4DnTHqUpp8gdAW9hzhoSftn"
              position="top"
              alt="..."
              height={"300px"}
              className="p-1 rounded"
            />
            <MDBCardBody>
              <MDBCardTitle>The Hobbit</MDBCardTitle>
              <MDBCardText>J. R. R. Tolkien</MDBCardText>
              <Link to={"/bookreview"}>
                <button className="btn btn-primary py-1 px-2">Read More</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-3">
          <MDBCard>
            <MDBCardImage
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-W_4DKzfvPOVZPfwHRn4OVbWYkTZRRT_F7QmPo8894_0QSzMG"
              position="top"
              alt="..."
              height={"300px"}
              className="p-1 rounded"
            />
            <MDBCardBody>
              <MDBCardTitle>The Book Thief</MDBCardTitle>
              <MDBCardText> Markus Zusak</MDBCardText>
              <Link to={"/bookreview"}>
                <button className="btn btn-primary py-1 px-2">Read More</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-3">
          <MDBCard>
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR819TtvIV0JJ5_Wzzfcnk3y2eXfPpamZmdbrg5ofv0Ydafpw_f"
              position="top"
              alt="..."
              height={"300px"}
              className="p-1 rounded"
            />
            <MDBCardBody>
              <MDBCardTitle>To Kill a Mockingbird</MDBCardTitle>
              <MDBCardText>Harper Lee</MDBCardText>
              <Link to={"/bookreview"}>
                <button className="btn btn-primary py-1 px-2">Read More</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-3">
          <MDBCard>
            <MDBCardImage
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYfnMOTORZdZTYo-HkP-wr-heRRWwmg9zJ6bBAiQRUDahrsne3"
              position="top"
              alt="..."
              height={"300px"}
              className="p-1 rounded"
            />
            <MDBCardBody>
              <MDBCardTitle>Atomic Habits</MDBCardTitle>
              <MDBCardText>James Clear</MDBCardText>
              <Link to={"/bookreview"}>
                <button className="btn btn-primary py-1 px-2">Read More</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
