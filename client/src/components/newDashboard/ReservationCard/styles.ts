import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: stretch;
    min-width: 420px;
    max-width: 768px;
    box-sizing: border-box;
    font-size: 1.2rem;
    margin: 2em 0 0 2em;
    background-color: white;
    border-radius: 1rem;
    color: var(--dark);

    div {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      padding: 1rem;
      padding-left: 2rem;

      div {
        padding: 0;
        padding-right: 1rem;
        align-self: center;
      }
    }

    span {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      &:first-child {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding-bottom: 1rem;
      }
    }

    // icons
    img {
      height: 1.2rem;
      width: 1.2rem;
      margin: 0 0.5rem;
    }

    &:hover {
      box-shadow: 0 2px 5px 5px rgba(77, 79, 115, 0.1);
    }
  `