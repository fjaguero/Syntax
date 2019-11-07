import { withRouter } from "next/router";
import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ShowList from "../components/ShowList";
import ShowNotes from "../components/ShowNotes";
import Player from "../components/Player";
import Meta from "../components/meta";
import Page from "../components/Page";
import getBaseURL from "../lib/getBaseURL";

export default withRouter(
  class ShowPage extends React.Component {
    static propTypes = {
      router: PropTypes.object.isRequired,
      baseURL: PropTypes.string.isRequired
    };

    constructor() {
      super();

      this.state = {
        show: undefined
      };
    }

    static async getInitialProps({ req }) {
      const baseURL = getBaseURL(req);

      console.log("number here!");
      console.log(req);

      const { data: show } = await axios.get(
        `${baseURL}/api/shows/${req.params.number}`
      );

      return { baseURL, show };
    }

    setCurrentPlaying = currentPlaying => {
      console.log("Setting current playing");
      this.setState({ currentPlaying });
    };

    render() {
      const { baseURL, show } = this.props;

      console.log("show FE");
      console.log(show);

      if (!show) return <p>hola</p>;

      return (
        <Page>
          <Meta show={show} baseURL={baseURL} />
          <div className="wrapper">
            <div
              style={{
                width: "100%",
                height: "50px",
                fontSize: "1.45rem",
                margin: "20px 0",
                padding: "10px",
                color: "white"
              }}
            >
              Filter by role
            </div>
            <main className="show-wrap" id="main" tabIndex="-1">
              {/* <Player show={current} /> */}
              <ShowNotes show={show} />
            </main>
          </div>
        </Page>
      );
    }
  }
);
