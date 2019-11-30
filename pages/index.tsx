import React, { Component } from "react";
import Layout from "../components/Layout";
import { Landing } from "../components/Segments";

type State = {};

export default class Main extends Component<{}, State> {
  render() {
    return (
      <Layout>
        <Landing />
      </Layout>
    );
  }
}
