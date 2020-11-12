import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskList from './TaskList';

const Dashboard = ({ groups }) => (
  <div>
    <h2>Dashboard</h2>
    {groups.map(group => (
      <TaskList key={group.id} name={group.name} id={group.id} />
    ))}
  </div>
);

const mapStateToProps = state => ({ groups: state.groups });

Dashboard.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(Dashboard);
