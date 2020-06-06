import styled from "styled-components";

export default styled.section`
  padding-top: 2em;
  padding-bottom: 2em;
  .ui.card > .content > .header {
    color: #630063;
  }
  a:hover {
    color: #a600a6;
  }
  .ui.cards > .card > .image:hover {
    transform: scale(0.9);
  }
  .ui.card,
  .ui.cards > .card {
    width: 22em;
  }
`;
