import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  color: inherit;
  text-decoration: none;
`;

const StyledInput = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  outline: none;
  border: none;
`;

const LupeSvg = styled.svg`
  width: 20px;
  height: 20px;
  background: white;
  margin-right: 5px;
  margin-left: 5px;
`;

class DefaultInput extends Component {
  onChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  };

  render() {
    const { placeholder } = this.props;
    return (
      <InputContainer>
        <LupeSvg viewBox="0 0 22 22">
          <path d="M 8 0 A 8 8 0 1 0 16 8 A 8 8 0 0 0 8 0 z M 7.7421875 1.8046875 A 6.2 6.2 0 0 1 14.199219 8 A 6.21 6.21 0 0 1 8 14.199219 A 6.2 6.2 0 0 1 7.7421875 1.8046875 z M 13.699219 13.609375 L 13.699219 15.029297 L 18.630859 19.970703 L 20.039062 18.550781 L 15.699219 14.199219 L 15.140625 13.650391 L 15.109375 13.609375 L 13.699219 13.609375 z " />
        </LupeSvg>
        <StyledInput onChange={this.onChange} placeholder={placeholder} />
      </InputContainer>
    );
  }
}

DefaultInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default DefaultInput;
