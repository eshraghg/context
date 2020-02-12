import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit = value => {
    return value === "english" ? "Submit" : "Voorleggen";
  };

  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {value => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

//--------ALTERNATIVE WAY (using this.context)

// import React from "react";
// import LanguageContext from "../contexts/LanguageContext";

// class Button extends React.Component {
//   static contextType = LanguageContext;

//   render() {
//     const text = this.context === "english" ? "Submit" : "Voorleggen";
//     return <button className="ui button primary">{text}</button>;
//   }
// }

// export default Button;
