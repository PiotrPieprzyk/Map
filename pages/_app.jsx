import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import Router from 'next/router'

const PopUpState = {
  visible: false,
  popupComponent: "",
};

const menuReducer = (state = PopUpState, action) => {
  switch (action.type) {
    case "changeVisibility":
      return { ...state, visible: state.visible = action.popUpvisible };
    case "setPopupComponent":
      return { ...state, popupComponent: action.component };
    default:
      return state;
  }
};

/**
 * @param {object} initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 * @param {boolean} options.isServer Indicates whether makeStore is executed on the server or the client side
 * @param {Request} options.req Node.js `Request` object (only set before `getInitialProps` on the server side)
 * @param {Response} options.res Node.js `Response` object (only set before `getInitialProps` on the server side)
 * @param {boolean} options.debug User-defined debug flag
 * @param {string} options.storeKey The key that will be used to persist the store in the browser's `window` object for safe HMR
 */
const makeStore = (initialState, options) => {
  return createStore(menuReducer, initialState);
};

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
      // We can dispatch from here too
      console.log("MyApp")
      ctx.store.dispatch({ type: "changeVisibility", popUpvisible: false});
      ctx.store.dispatch({ type: "setPopupComponent",component: '',});

      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

      return {pageProps};
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
