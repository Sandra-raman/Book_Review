import React, { useEffect, useState } from "react";
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
import { MDBTextArea } from "mdb-react-ui-kit";
import { addReviewAPI } from "../Services/allAPI";
function AddReview() {
  const [staticModal, setStaticModal] = useState(false);

  const toggleOpen = () => setStaticModal(!staticModal);

  const [ReviewDetails,setReviewDetails]=useState({
    title:"",
    author:"",
    reviewnote:"",
    website:"",
    rating:"",
    bookImg:""
  })
  const handleAddreview=async()=>{
    console.log(ReviewDetails);
    const {title,author,reviewnote,website,rating,bookImg}=ReviewDetails
    if(!title || !author || !reviewnote || !website || !rating||!bookImg ){
      alert("Please fill the project details")
    }
    else{
      const reqbody = new FormData()
      reqbody.append('title',title)
      reqbody.append('author',author)
      reqbody.append('reviewnote',reviewnote)
      reqbody.append('website',website)
      reqbody.append('rating',rating)
      reqbody.append('bookImg',bookImg)

      const token=sessionStorage.getItem("token")
      console.log(token);
      
     if(token){
      const reqheader={
        "content-Type":"multipart/form-json",
        "Authorization":`Bearer ${token}`
      }
      try{
        const response=await addReviewAPI(reqbody,reqheader)
        console.log(response);
        
        if(response.status==200){
          alert('Review added successfully')
          handleClose()
          setReviewDetails({
            title:"",
            author:"",
            reviewnote:"",
            website:"",
            rating:"",
            bookImg:""
          })

        }else{
          alert(response.response.data)
        }
        
      }catch(err){
        alert(err)
      }
     }
   
    }
    
  }

  const [preview,setpreview]=useState('')

  //Image file to url convertion

  useEffect(()=>{
   if(ReviewDetails.bookImg){
    setpreview(URL.createObjectURL(ReviewDetails.bookImg))
   }
  },[ReviewDetails.bookImg])
  return (
    <div>
      <hr />
      <div className="row mt-4">
        <div className="col-8 ms-2">
          <button onClick={toggleOpen} className=" btn btn-info">
            Upload new Review Click here
          </button>
        </div>
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
              <label>
                <input
                  onChange={(e) =>
                    setReviewDetails({
                      ...ReviewDetails,
                      bookImg: e.target.files[0],
                    })
                  }
                  type="file"
                  style={{ display: "none" }}
                />
                <img
                  src={preview?preview:"https://png.pngtree.com/png-clipart/20231016/original/pngtree-professional-web-developer-3d-illustration-png-image_13322705.png"
                  }
                  
                  alt=""
                  height={"350px"}
                  width={"350px"}
                />
              </label>
              <MDBInput
                label="Book Title"
                id="typeText"
                type="text"
                className="my-3"
                onChange={(e)=>setReviewDetails({...ReviewDetails,title:e.target.value})}
              />
              <MDBInput label="Author" id="typeText" type="text" 
              onChange={(e)=>setReviewDetails({...ReviewDetails,author:e.target.value})}

              />
              <MDBTextArea
                label="Review"
                id="textAreaExample"
                rows="{4}"
                className="my-3"
                onChange={(e)=>setReviewDetails({...ReviewDetails,reviewnote:e.target.value})}

              />
              <MDBTextArea
                label="Rating"
                id="textAreaExample"
                rows="{4}"
                className="my-3"
                onChange={(e)=>setReviewDetails({...ReviewDetails,rating:e.target.value})}

              />
              <MDBTextArea
                label="About Book"
                id="textAreaExample"
                rows="{4}"
                className="my-3"
                onChange={(e)=>setReviewDetails({...ReviewDetails,website:e.target.value})}

              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleAddreview}>Upload</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default AddReview;
