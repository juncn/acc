import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';

const TaskList = ({
  tasks, name, id, createNewTask,
}) => (
  <div>
    <h3>{name}</h3>
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          {task.name}
          :
          {task.id}
        </div>
      ))}
    </div>
    <button type="button" onClick={() => createNewTask(id)}>
      Add New
    </button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const groupId = ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter(task => task.group === groupId),
  };
};

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch, ownProps) => ({
  createNewTask(id) {
    console.info('Creating new task...', id);
    dispatch(requestTaskCreation(id));
  },
});

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  createNewTask: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
