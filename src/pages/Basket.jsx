import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useRef, useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getBasketDecrement, getBasketIncrement, getDeleteBasket } from "../redux/createSlice/counterSlice";
import { Link } from "react-router-dom";

export default function Basket() {

  const { basketArr } = useSelector(state => state.allState);
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState("");
  const ref = useRef();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalPrice = basketArr.reduce((acc, item) => acc + item.allREsult, 0);
    setPrice(totalPrice);
  }, [basketArr]);

  const handleBuy = () => {
  
    if (discount === "ENDIRIM20") {
      alert("Endirim tetbiq olundu");
      setDiscount("");
      const discountedPrice = price - (price * 20) / 100;
      setPrice(discountedPrice);
    } else {
      alert("Promokod yanlışdır");
    }
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {basketArr.length} items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />
                      {basketArr.map(item => (
                        <MDBRow key={item.id} className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={API_IMG + item.poster_path}
                              fluid className="rounded-3" alt="Cotton T-shirt" />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              Shirt
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              Cotton T-shirt
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                            <MDBBtn onClick={() => dispatch(getBasketDecrement(item.id))} color="link" className="px-2">
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput type="number" min="0" value={item.basketCount} readOnly size="sm" />

                            <MDBBtn onClick={() => dispatch(getBasketIncrement(item.id))} color="link" className="px-2">
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0  text-blue-600">
                              € {item.allREsult}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a onClick={() => dispatch(getDeleteBasket(item.id))} href="#!" className="text-muted">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> <Link to="/home">Back to shop</Link>
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-slate-800">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items {basketArr.length}
                        </MDBTypography>
                        <MDBTypography tag="h5">€ {price.toFixed(2)}</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code (Discount 20 %) -- ENDIRIM20
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput value={discount} onChange={(e) => setDiscount(e.target.value)} size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography ref={ref} tag="h5">€ {price.toFixed(2)}</MDBTypography>
                      </div>

                      <MDBBtn onClick={() => handleBuy()} color="dark" block size="lg">
                        Buy
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
