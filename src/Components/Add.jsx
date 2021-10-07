import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';


function Add(props) {
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const[newMovie,setNewmovie]=useState({
      id:11,
      title:"",
      posterURL:"",
      description:"",
      rating:0

  })
  const handleChange=(e)=>{
    setNewmovie({...newMovie,[e.target.name]:e.target.value})  
  }
 const handleSave =()=>{
    props.handeleAddMovie(newMovie)

     handleClose()
 }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Movie Information </Modal.Title>
          </Modal.Header>
          <Modal.Body
          >
              <input name="title" type ="text" placeholder=" Enter movie title "  onChange={handleChange}></input>
              <input name="posterURL" type ="text" placeholder="Enter movie posterURL" onChange={handleChange} ></input>
              <input name="description" type ="text" placeholder="Enter movie description" onChange={handleChange} ></input>
              <input name="rating" type ="number" onChange={handleChange} ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleSave()}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 

    export default Add