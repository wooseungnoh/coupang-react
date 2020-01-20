import styled, { css } from "styled-components";

const SIZES = {
  mini: "10px",
  tiny: "12px",
  small: "14px",
  medium: "15px",
  large: "16px",
  big: "19px",
  huge: "20px",
  massive: "24px"
};

const COLOR = {
  underPrice:"#9B9B9B",
  realPrice:"#7A0000",
  review:"#6D6D6D",
  normal:"#000000"
}

export const Text = styled.p`
  font-size: ${({ size }) => SIZES[size] || SIZES.small};
  color:${({color}) => COLOR[color] || COLOR.normal};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;

export const Ctext = styled.s`
  font-size: ${({ size }) => SIZES[size] || SIZES.small};
  color:${({color}) => COLOR[color] || COLOR.normal};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`