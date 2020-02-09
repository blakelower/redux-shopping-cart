import React, { Component } from "react";
import "./App.css";
import Products from './components/products/Products';
import PRODUCTS from "./DATA";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {addToCartAction} from './redux/actions/cart_action';
import CartList from './components/cart/CartList';
import {Grid} from 'react-bootstrap';
import SubTotal from './components/Subtotal';
import {Route} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 100 
    }
  }
  render() {
    const {cart, addToCartAction} = this.props;
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        <CartList cart={cart}/>
        <Products products={PRODUCTS} 
        addToCartAction={addToCartAction}/>
      </main>
    );
  }
}

const mapStateToProps = ({cart}) => {
  return{
    cart
  }
}
const mapActionsToProp = (dispatch) => {
  return bindActionCreators({
    addToCartAction
  }, dispatch)
}
export default connect(mapStateToProps, mapActionsToProp)(App);
