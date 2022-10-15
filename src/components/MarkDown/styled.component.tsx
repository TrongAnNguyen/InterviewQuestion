import styled from "@emotion/styled";

export const MarkDownContainer = styled.div`
  pre code {
    color: rgba(0, 0, 0, 0.7);
    background: transparent;
  }

  code {
    background: radial-gradient(circle at 30% 50%, #f2f8ff, #e4edff);
    color: #4b47c7;
    padding: 2px 3px;
    border-radius: 2px;
    font-size: 90%;
    overflow-wrap: break-word;
  }
`;
