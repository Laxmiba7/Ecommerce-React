// import React from 'react'
// import Offcanvas from "react-bootstrap/Offcanvas";

// const Filter=()=> {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//   return (
//     <div><div className='d-flex justify-content-between me-5 ms-5' >
//     <h5>Products</h5>
//     <Button variant="primary" onClick={handleShow}>
//     <AiTwotoneFilter /> Filter
//    </Button>

//   <Offcanvas show={show} onHide={handleClose} className="me-3 ">
//     <Offcanvas.Header closeButton className="bg-primary text-white">
//       <Offcanvas.Title>Filter</Offcanvas.Title>
//     </Offcanvas.Header>
//     <Offcanvas.Body>
//       <div className="Form">
//         <form>
//           <div>
//             <label htmlFor="Price">Price</label> <br />
//             <div className="row">
//               <div className="col-6">
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="Price"
//                   aria-describedby="Price"
//                   placeholder="Min"
//                 />
//               </div>

//               <div className="col-6">
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="Price"
//                   aria-describedby="Price"
//                   placeholder="Max"
//                 />
//               </div>
//             </div>
//           </div>
//           <br />

//           <div className="mb-3">
//             <label htmlFor="exampleInputDate1" className="form-label">
//               Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="exampleInputDate1"
//               aria-describedby="Date"
//               placeholder="dd/mm/yyy"
//             />
//           </div>

//           <br />

//           <div className="mb-3">
//             <label htmlFor="category" className="form-label">
//               Category
//             </label>
//             <select id="category" className="form-select">
//               <option>Select Options</option>
//             </select>
//           </div>
//         </form>
        
//       </div>
//     </Offcanvas.Body>
//     <div className='d-md-flex justify-content-md-end'>
//         <button type='submit' className='btn btn-primary btn-lg m-5' onClick={(e)=> {find()}}>Search</button>
//         </div>
//   </Offcanvas>
    
// </div></div>
//   )
// }

// export default Filter