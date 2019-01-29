import React from "react";

const Header = (props) => {
    return (
        <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="The">The</span>
          </span>
          day
        </h1>
        <h3 className="tagline">
          <span>{props.tagline}</span>
        </h3>
      </header>
    );
}

export default Header;