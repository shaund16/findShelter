import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    margin: 2rem;
    background-color: white;
    border-radius: 1rem;
    color: var(--dark);
    max-width: 100vw;
  }

  &:hover {
    box-shadow: 0 2px 5px 5px rgba(77, 79, 115, 0.1);
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    background-color: white;
    border-radius: 1rem;
    color: var(--dark);
    width: 90%;
    margin-bottom: 2rem;
    max-height: 90vh;
  
    &:hover {
    box-shadow: 0 2px 5px 5px rgba(77, 79, 115, 0.1);
  }
}
`

export const Image = styled.div`
@media only screen and (min-width: 767px) {
    margin: 0;
    box-sizing: border-box;
    padding-right: 1rem;
    min-width: 100px;
    max-width: 300px;

img {
  height: 100%;
  width: 100%;
  border-radius: 1rem 0 0 1rem;
  object-fit: cover;
  object-position: center center;
}
}

@media only screen and (max-width: 768px) {
  margin: 0;
  box-sizing: border-box;
  max-height: 40px;
  margin-bottom: 3rem;

  img {
    height: 80px;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
    object-position: center center;
  }
}
`

export const Info = styled.div`
@media only screen and (min-width: 767px) {
  padding: 1rem;
  flex-grow: 1;

  img {
    height: 1.2rem;
    width: 1.2rem;
    margin: 0 0.5rem;
  }
}
@media only screen and (max-width: 768px) {
  padding: 1rem;

  img {
    height: 1.2rem;
    width: 1.2rem;
    margin: 0 0.5rem;
  }
  
  h2 {
    text-align: center;
    }
}
`

export const Filters = styled.span`
  margin: 0.5rem 0;

  img {
    align-self: center;
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 768px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    &:last-child {
      grid-column: span 2;
    }
  }
  }
`

export const Details = styled.div`
  margin: 0;

  span {
    margin: 0.2rem 0;

    img {
    margin: 0;
    margin-right: 0.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 0.5rem;
    }

    strong {
      align-self: center;
    }
  }
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

@media only screen and (max-width: 768px) {
margin-bottom: 1rem;
}
`

export const Numbers = styled.div`
@media only screen and (min-width: 767px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;
}

@media only screen and (max-width: 768px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
`

export const Card = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 10rem;
margin-bottom: 1rem;

strong {
  font-weight: 700;
}

&:last-child {
  color: var(--red);
}

@media only screen and (max-width: 768px) {
margin: 0;
}
`

export const Actions = styled.div`
  margin: 1rem 0;
display: flex;
justify-content: space-between;
align-items: center;

button {
  margin: 0.5rem 1rem;
}

@media only screen and (max-width: 768px) {
  margin: 0;
}
`

