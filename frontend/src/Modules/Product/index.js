import "../../assets/styles/css/product.css";
import "../../assets/styles/css/header.css";
import "../../assets/styles/css/base.css";
import "../../assets/styles/css/main.css";
import "../../assets/styles/css/footer.css";
import "../../assets/styles/css/overlay-menu.css";

import React, { useEffect, useState } from "react";
import axios from "axios";

//burger-bar
import { Link } from "react-router-dom";

// @svg
import { CartIcon } from "../../assets/svg";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetchGetListProducts();
  }, []);

  const fetchGetListProducts = async (keySearch = "") => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:3002/products/listProducts",
        {
          page: 1,
          size: 10000,
          productText: keySearch,
        }
      );
      if (data.retCode === 0) {
        const list = data.retData.products.reverse();
        setListProducts(list);
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    } finally {
      setLoading(false);
    }
  };

  function openNav() {
    document.getElementById("overlay-menu").style.height = "100%";
  }
  function closeNav() {
    document.getElementById("overlay-menu").style.height = "0%";
  }

  function search_product(value) {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("content-body-item-product");
    for (let i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "block";
      }
    }
  }

  const openShopping = document.querySelector(".shopping");
  const closeShopping = document.querySelector(".closeShopping");
  const body = document.querySelector("body");
  let list = document.querySelector(".list");
  let listCard = document.querySelector(".listCard");
  let total = document.querySelector(".total");
  let quantity = document.querySelector(".quantity");

  openShopping?.addEventListener("click", () => {
    body.classList.add("active");
  });

  closeShopping?.addEventListener("click", () => {
    body.classList.remove("active");
  });

  let listCards = [];
  function addToCard(key) {
    if (listCards[key] == null) {
      // copy product form list to list card
      listCards[key] = JSON.parse(JSON.stringify(listProducts[key]));
      listCards[key].quantity = 1;
    }
    console.log("listCards", listCards);
    reloadCard();
  }
  function reloadCard() {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
      totalPrice = totalPrice + value.price;
      count = count + value.quantity;
      if (value != null) {
        let newDiv = document.createElement("li");
        newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                   <button onclick="changeQuantity(${key}, ${
          value.quantity - 1
        })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
          value.quantity + 1
        })">+</button>
                </div>`;
        listCard.appendChild(newDiv);
      }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
  } //changeQuantity(${key}, ${value.quantity - 1})
  function changeQuantity(key, quantity) {
    // if (quantity == 0) {
    //   delete listCards[key];
    // } else {
    //   listCards[key].quantity = quantity;
    //   listCards[key].price = quantity * listProducts[key].price;
    // }
    // reloadCard();
    console.log("hihi");
  }
  return (
    <React.Fragment>
      <div className="content-header">
        <img
          src="https://www.couvee.co.id/wp-content/uploads/2020/01/81D7C1B6-7763-411D-816B-742009C14740.jpeg"
          alt="img-background"
          className="img-background"
        />
        <div className="content-header-box">
          <div className="content-header-box-left">
            <svg
              className="logo-insta"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
          <div className="content-header-box-center">
            <img
              src="https://www.couvee.co.id/wp-content/themes/couvee/assets/images/logo-text.png"
              alt="img-logo"
            />
          </div>
          <div className="content-header-box-right">
            <div className="burger">
              <i className="fa-solid fa-bars" onClick={() => openNav()}></i>
            </div>
            <div className="shopping">
              <div>
                <CartIcon />
              </div>
              <span className="quantity">0</span>
            </div>
          </div>
        </div>
        <h1 className="content-header-title">MENU</h1>
      </div>
      <div className="content-body">
        <h2 className="content-body-title">PRODUCTS</h2>
        <input
          id="searchbar"
          onKeyUp={() => search_product()}
          type="text"
          name="search"
          placeholder="Search product.."
        />

        <div className="content-body-box">
          <div className="content-body-list">
            <div className="content-body-list-item" href="#">
              All
            </div>
            <div className="content-body-list-item" href="#">
              Basic
            </div>
            <div className="content-body-list-item" href="#">
              Signature
            </div>
            <div className="content-body-list-item" href="#">
              Flabored Coffee
            </div>
            <div className="content-body-list-item" href="#">
              Non-coffee
            </div>
          </div>

          <div className="content-body-item">
            {listProducts?.map((item, index) => {
              return (
                <div
                  className="content-body-item-product"
                  key={`${index}-${item?._id}`}
                >
                  <img
                    src={item?.image}
                    alt="product"
                    className="product-item"
                  />
                  <p className="product-item-title">{item?.name}</p>
                  <div className="product-item-content">
                    <div className="price">
                      <p className="product-item-price">{item?.price}$</p>
                    </div>
                    <div className="cart" onClick={() => addToCard(index)}>
                      <a
                        href="#"
                        className="fa-solid fa-cart-shopping"
                        style={{ color: "black" }}
                      ></a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="wrapper">
          <div className="section">
            <div className="logo">
              <img src="../../assets/img/logo-text.png" alt="" />
            </div>
            <div className="content-col">
              <p>LINKS</p>
              <div className="content-row">
                <div className="content-col">
                  <a href="">Homepage</a>
                  <a href="">Story</a>
                </div>
                <div className="content-col">
                  <a href="">Menu</a>
                  <a href="">Locations</a>
                </div>
                <div className="content-col">
                  <a href="">Merchandise</a>
                  <a href="">Contact</a>
                </div>
              </div>
            </div>
            <div className="content-col">
              <p>CONTACT</p>
              <a href="">Code0Bug@Couvee.com</a>
            </div>
            <div className="content-col">
              <p>SOCIALS</p>
              <a href="">
                <i className="fa-brands fa-instagram"></i> couvee.c0b
              </a>
            </div>
          </div>
        </div>
        <div className="colophon">
          <div className="wrapper">
            <p>Web Application Development Project - Semester 2, 2023</p>
            <p>Couvee - Code0Bug</p>
          </div>
        </div>
      </div>
      <div className="overlay" id="overlay-menu">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>

        <nav className="overlay-menu">
          <Link to="/"> HOMEPAGE </Link>
          <Link to="/Product">MENU</Link>
          <Link to="/">LOGIN</Link>
          <Link to="/">REGISTER</Link>
          <Link to="/">CONTACT</Link>
        </nav>
      </div>
      <div className="card">
        <h1>Cart</h1>
        <ul className="listCard">
          {/* {cartList?.map((value, index) => {
            return (
              <div className="listCard-item" key={index}>
                <div className="listCard-item-img">
                  <img src={value?.image} className="card-img" />
                </div>
                <div className="listCard-item-name">
                  <h4>{value?.name}</h4>
                </div>
                <div className="listCard-item-price">
                  <h4>{value?.totalPrice}</h4>
                </div>
                <div className="listCard-item-price">
                  <h4>x{value?.totalItem}</h4>
                </div>
                <div className="listCard-item-quantity">
                  <button onClick={() => handleIncrease(value, "increase")}>
                    +
                  </button>
                  <button onClick={() => handleDecrease(value, "decrease")}>
                    -
                  </button>
                </div>
              </div>
            );
          })} */}
        </ul>
        <div className="checkOut">
          <div className="total">0</div>
          <div className="closeShopping">Checkout</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
