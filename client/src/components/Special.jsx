import React from "react";
import styled from "styled-components";
import Book from "./Book";

const Container = styled.div``;
const SpecialHeading = styled.h2``;
const Choices = styled.span``;
const SpecialPara = styled.p``;
const BookSection = styled.div``;

const Special = () => {
  return (
    <Container>
      <SpecialHeading>
        <Choices>Choices</Choices>
        <Choices>for you</Choices>
      </SpecialHeading>
      <SpecialPara>Matches with your interest.</SpecialPara>
      <BookSection>
        <Book />
      </BookSection>
    </Container>
  );
};

export default Special;
