import React from "react";
import PropTypes from "prop-types";
import slug from "speakingurl";
import Router from "next/router";
import { FaPlay } from "react-icons/fa";
import Bars from "./bars";
import Link from "next/link";

export default class Show extends React.Component {
  static propTypes = {
    show: PropTypes.object.isRequired,
    currentPlaying: PropTypes.string.isRequired,
    currentShow: PropTypes.string.isRequired,
    setCurrentPlaying: PropTypes.func.isRequired
  };

  changeURL = (e, show) => {
    e.preventDefault();
    const { href } = e.currentTarget;
    Router.push(`/?number=${show.displayNumber}`, href, { shallow: false });
  };

  render() {
    const { show, currentPlaying, currentShow, setCurrentPlaying } = this.props;

    return (
      <div className="show">
        <img src={show.image} />
        <Link
          className="show__link"
          href={`/show/${show.displayNumber}/${slug(show.title)}`}
          // onClick={e => this.changeURL(e, show)}
        >
          <p className="show__displayNumber">
            Episode {show.displayNumber} -- Product Manager
            <h3 className="show__title">{show.title}</h3>
          </p>
        </Link>

        {/* <div className="show__playcontrols">
          {currentPlaying === show.displayNumber ? (
            <Bars />
          ) : (
            <button
              type="button"
              onClick={() => setCurrentPlaying(show.displayNumber)}
              className="show__play"
              title="play button"
            >
              <FaPlay />
            </button>
          )}
        </div> */}
      </div>
    );
  }
}
