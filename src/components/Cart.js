import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = (props) => {
  const { cartItems,setCartItems, cartValues, total } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (id) => {
    let filteredItem = cartItems.filter((i)=>  i.id !== id )
    setCartItems(filteredItem);
  }
  return (
    <div>
      <button
        type="button"
        className="btn position-relative text-white btn-lg "
        onClick={handleShow}
      >
        <BsCartPlus className="reactIcon" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItems.length}
        </span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((i, ind) => {
            let amt = i.price.split("").slice(1).join("") * (119.84).toFixed(0);

            return (
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-5">
                      <img
                        src={`https://electronic-ecommerce.herokuapp.com/${i.image}`}
                        alt="ItemsAdded"
                        className="img-fluid"
                        style={{}}
                      />
                    </div>

                    <div className="col-7">
                      <h5>{i.name}</h5>
                      <p className="text-success">Rs.{amt * cartValues[ind]}</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <b className="text-success ms-5">{i.stock}</b>
                  <br />
                  <div
                    className="btn-group buttonStyling"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" className="btn btn-outline-success">
                      -
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      {cartValues[ind]}
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      +
                    </button>
                  </div>
                  <button type="button" className="btn btn-danger ms-5" onClick={()=>handleDelete(i.id)}>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </Modal.Body>

        <Modal.Footer>
          <div>
            <p> Total Amount: {total} </p>
            <Button variant="success">Checkout</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
