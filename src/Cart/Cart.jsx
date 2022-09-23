import React, { Component } from "react";
import CartApi from "./CartApi.jsx";
import "./cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cartapi: CartApi,
      searchapi: "",
    };
  }
  render() {
    // Multi function
    // const onChange = (event) => {
    //   console.log(event.target.name);
    //   const { value, name } = event.target;
    //   this.setState({ [name]: value });
    // };

    const onSearch = (event) => {
      const { value } = event.target;
      this.setState({ searchapi: value });
      const res = CartApi.filter(({ name, img }) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ cartapi: res });
    };

    console.log(this.state.searchapi);
    return (
      <div className="alert alert-primary col-8  container mt-3">
        <h2>WebBrain Academy</h2>
        <div className="container item">
          <div className="row">
            <div className="col-sm">
              <h3>
                Search: <span>{this.state.searchapi}</span>
              </h3>
            </div>
            <div className="col-sm">
              <h3 align="right">
                Number of fruits: <span>{this.state.cartapi.length}</span>
              </h3>
            </div>
          </div>
        </div>

        <form>
          <div className="col mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search . . ."
              onChange={onSearch}
            />
          </div>
        </form>

        {/* Grid bootstrap */}
        <div className="container grid__item mt-5">
          {this.state.cartapi.map(({ name, img }) => {
            return (
              <div className="row">
                <div className="col-12">
                  <img src={img} alt="Rasmlar" />
                  <p>{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Cart;

// start function
// const onNameChange = (event) => {
//   const { value } = event.target;
//   this.setState({ name: value });
// };
// const onSurnameChange = (event) => {
//   const { value } = event.target;
//   this.setState({ surname: value });
// };
// const onStatusChange = (event) => {
//   const { value } = event.target;
//   this.setState({ status: value });
// };
