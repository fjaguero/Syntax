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
  class IndexPage extends React.Component {
    static propTypes = {
      router: PropTypes.object.isRequired,
      shows: PropTypes.array.isRequired,
      baseURL: PropTypes.string.isRequired
    };

    constructor(props) {
      super();
      const currentShow =
        props.router.query.number || props.shows[0].displayNumber;

      this.state = {
        currentShow,
        currentPlaying: currentShow
      };
    }

    static async getInitialProps({ req }) {
      const baseURL = getBaseURL(req);
      const { data: shows } = await axios.get(`${baseURL}/api/shows`);
      return { shows, baseURL };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      const { query } = nextProps.router;
      if (query.number) {
        return { ...prevState, currentShow: query.number };
      }
      return prevState;
    }

    setCurrentPlaying = currentPlaying => {
      console.log("Setting current playing");
      this.setState({ currentPlaying });
    };

    render() {
      const { shows = [], baseURL } = this.props;
      const { currentShow, currentPlaying } = this.state;
      // Currently Shown shownotes
      const show =
        shows.find(showItem => showItem.displayNumber === currentShow) ||
        shows[0];
      // Currently Playing
      const current =
        shows.find(showItem => showItem.displayNumber === currentPlaying) ||
        shows[0];

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
              <ShowList
                shows={shows}
                currentShow={currentShow}
                currentPlaying={currentPlaying}
                setCurrentPlaying={this.setCurrentPlaying}
              />
              {/* <ShowNotes
                show={show}
                setCurrentPlaying={this.setCurrentPlaying}
              /> */}
            </main>
          </div>
        </Page>
      );
    }
  }
);
