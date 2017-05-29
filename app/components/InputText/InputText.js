import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';

/**
 * InputText Component
 */
class InputText extends React.Component {

  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      [this.props.field]: ''
    };
  }

  handleTextChange(text) {
    const { field } = this.props;

    this.setState({
      [field]: text
    });
  }

  render() {
    const { field } = this.props;

    return (
      <TextInput
        style={this.props.style}
        onChangeText={this.handleTextChange}
        value={this.state[field]}
      />
    );
  }
}

/**
 * InputText Component properties
 *
 * @property {string} field
 */
InputText.propTypes = {
  field: PropTypes.string.isRequired,
  style: PropTypes.number
};

InputText.defaultProps = {
  style: {}
};

export default InputText;
