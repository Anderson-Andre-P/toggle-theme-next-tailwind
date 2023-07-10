'use client';

import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-6 py-4">
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;
