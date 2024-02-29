// TeamMember.js
import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ name, role, image }) => {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center', marginRight: '50px'}}>
      <img src={image} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px'}} />
      <h4 style={{marginBottom: '15px'}}>{name}</h4>
      <p style={{marginBottom: '15px'}}>{role}</p>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TeamMember;
