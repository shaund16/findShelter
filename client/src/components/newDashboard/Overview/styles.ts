import styled from 'styled-components';

export const Wrapper = styled.div`
  @media only screen and (min-width: 767px) {
    margin: 2em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 0 auto;
  }
`;

export const Card = styled.div`
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--dark-grey);
  box-shadow: var(--box-shadow);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    decoration: none;

    img {
      height: 1.5rem;
    }
  }

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    font-size: 4rem;
    font-weight: 600;
    line-height: 3rem;
  }

  &:last-child {
    background-color: var(--dark);
    color: white;
  }

  @media only screen and (max-width: 768px) {
    &:nth-child(3) {
      margin-bottom: 1rem;
    }

    &:nth-child(4) {
      margin-bottom: 1rem;
    }

    &:nth-child(even) {
      margin-right: 0.5rem;
    }

    &:nth-child(odd) {
      margin-left: 0.5rem;
    }
  }
`;

export const H2 = styled.h2`
`

export const Container = styled.span`
  width: 100%;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--dark);
  padding: 0 2rem;
  margin-bottom: 2rem;
`

export const BookReservationBtn = styled.div`
  padding: 1em;
  width: 100%;
  height: 4rem;
  margin: 0 auto;
  color: white;
  padding: 0 2rem;
  margin: 2rem 0;

  & > button {
    height: 100%;
    font-weight: bold;
  }
`;
