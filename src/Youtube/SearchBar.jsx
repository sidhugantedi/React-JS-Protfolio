import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import '../css/style.css';
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <FormGroup className="search-bar">
        <InputGroup>
          <FormControl
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <InputGroup.Addon>
              <Glyphicon glyph = "search"></Glyphicon>
            
            </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
