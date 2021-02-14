import React from 'react';
import './page-shell.scss';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileHeader from './profile-header'

function PageShell() {
  return (
    <>
      <ProfileHeader></ProfileHeader>
      <Row className="mr-auto mbp-tabs-header">
        <Link to="/collect">Collect</Link>
        <Link to="/filter">Filter</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/visualize">Visualize</Link>
        <Link to="/act">Act</Link>
      </Row>
    </>
  );
}

export default PageShell;
