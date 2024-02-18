import React from 'react';
import PropTypes from 'prop-types';

import { SectionContainer, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
