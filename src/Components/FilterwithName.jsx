import { Form,FormControl, Button } from 'react-bootstrap';

function FilterwithName(props){
    return (
        <Form className="d-flex"style={{marginLeft:"300px"}}  >
        <FormControl
          type="search"
          placeholder="Search by Title"
          className="mr-2"
          aria-label="Search"
         
          onChange={(e)=>props.handleFilterName(e.target.value)}
        />
       
      </Form>
      
    )
}
export default FilterwithName
