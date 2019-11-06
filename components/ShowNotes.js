import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ShowNotes = ({ show, setCurrentPlaying }) => {
  useEffect(() => {
    document.querySelector(".showNotes").scrollTop = 0;
  });

  return (
    <div className="showNotes">
      <p className="show__date">{show.displayDate}</p>
      <img
        height="300"
        src="https://images.theabcdn.com/i/35428855/600x600/c.png"
      />
      <h2>{show.title}</h2>
      <button
        className="button"
        onClick={() => setCurrentPlaying(show.displayNumber)}
        type="button"
      >
        <span className="icon">🎵</span> Play Episode {show.displayNumber}
      </button>
      <a className="button" download href={show.url}>
        <span className="icon">👇</span> Download Show
      </a>
      <a
        className="button"
        href={`https://github.com/wesbos/Syntax/edit/master/${show.notesFile}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">✏️</span> Edit Show Notes
      </a>
      <div dangerouslySetInnerHTML={{ __html: show.html }} />
    </div>
  );
};

ShowNotes.propTypes = {
  show: PropTypes.object.isRequired,
  setCurrentPlaying: PropTypes.func.isRequired
};

export default ShowNotes;
