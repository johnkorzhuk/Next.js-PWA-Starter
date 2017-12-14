// @flow

import React from "react";
// import styled from 'styled-components';
import withRedux from "next-redux-wrapper";
import { compose } from "redux";

import initStore from "../store/store";

class Index extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful");
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }

  render() {
    const { online } = this.props;
    return (
      <div>
        <h1>{(online && "online") || "offline"}</h1>
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            console.log("yo");
            this.setState(prevState => ({
              count: prevState.count + 1
            }));
          }}
        >
          inc
        </button>
        <p>
          yoyoyo Laboris dolore duis quis aute adipisicing nisi voluptate sit
          cillum proident consequat eu culpa. Proident esse culpa cupidatat et.
          Eiusmod magna sunt et amet qui.
        </p>
      </div>
    );
  }
}

const enhance = compose(
  withRedux(initStore, state => {
    return {
      online: state.offline && state.offline.online
    };
  })
);

export default enhance(Index);
