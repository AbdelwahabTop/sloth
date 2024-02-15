import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// dev-ghwsn5qao4rum25k.us.auth0.com
// vSwFUtEEyFDSJ7um2scJ7L2O3C9PRmvZ
// F-nYj34YhFBrkT4kpscF1LEgyD1IvD1VidWksEJ5qXoqYF--QvvB8OECYxZp8BxR
root.render(
  <Auth0Provider
    domain="dev-ghwsn5qao4rum25k.us.auth0.com"
    clientId="vSwFUtEEyFDSJ7um2scJ7L2O3C9PRmvZ"
    // authorizationParams={
    //   {
    //     redirect_uri: `/cart`,
    //   }
    // }
    redirectUri={window.location.origin}
    cacheLocation="localstorage">
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
