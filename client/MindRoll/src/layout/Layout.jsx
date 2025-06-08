// src/layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* C’est ici que s’afficheront les pages */}
      </main>
    </>
  );
};

export default Layout;
