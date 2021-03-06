import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
    border: 2px solid rgb(42, 125, 153);
    margin: 10px;
    padding: 0px 10px;
    background-color: rgb(236, 236, 236);
    display: inline-block;
`;
const Title = styled.h1`
    color: rgb(42, 125, 153);
    font-size: 1.5em;
`;
const ReactImg = styled.img`
  height: 80px;
  -webkit-animation:spin 14s linear infinite;
  -moz-animation:spin 14s linear infinite;
  animation:spin 14s linear infinite;

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

// React Component
export default class Sample extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Its more performate to bind your methods in the constructor
    this.myCustomMethod = this.myCustomMethod.bind(this);
  }
  // Custom method
  myCustomMethod() {
    console.log('. you clicked me');
  }

  render() {
    return (
      <Container>
        <Title>Hello <ReactImg src="assets/images/react.png" alt=""/>React Component!</Title>
        <button className="button" onClick={this.myCustomMethod}>I am a button</button>
      </Container>);
  }
}

