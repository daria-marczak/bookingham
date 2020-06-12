import React from 'react';
import styled from 'styled-components';

export enum TextWrappers {
  header1 = 'h1',
  header2 = 'h2',
  header3 = 'h3',
  paragraph = 'p',
}

export enum TextWeights {
  bold = 'bold',
  semibold = 'semibold',
  regular = 'regular',
}

export enum TextSizes {
  headerLarge = 'headerLarge',
  headerRegular = 'headerRegular',
  headerSmall = 'headerSmall',
  regular = 'regular',
  small = 'small',
  tiny = 'tiny',
}

export enum FontFamilies {
  primary = 'primary',
  accent = 'accent',
}

export enum ColorTypes {
  primary = 'primary',
  secondary = 'secondary',
  black = 'black',
  coal = 'coal',
  snow = 'snow',
  white = 'white',
}

interface Text {
  children: React.ReactNode;
  weight?: TextWeights;
  wrapper?: React.ElementType;
  size?: TextSizes;
  fontFamily?: FontFamilies;
  accent?: ColorTypes;
  className?: string;
}

const Wrapper = styled.p<Text>`
  font-weight: ${({ theme, weight }) => theme.textWeights[weight || TextWeights.regular]};
  color: ${({ theme, accent }) => theme.palette[accent || ColorTypes.black]};
  font-family: ${({ theme, fontFamily }) => theme.fontFamily[fontFamily || FontFamilies.primary]};
  font-size: ${({ theme, size }) => theme.fontSizes[size || TextSizes.regular]}px;
`;

const Typography: React.FC<Text> = ({
  children,
  wrapper = TextWrappers.paragraph,
  weight,
  className,
  size,
  fontFamily,
  accent,
  ...props
}) => (
  <Wrapper
    as={wrapper}
    accent={accent}
    fontFamily={fontFamily}
    weight={weight}
    size={size}
    className={className}
  >
    {children}
  </Wrapper>
);

export default Typography;
