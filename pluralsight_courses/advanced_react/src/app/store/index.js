/* eslint-disable no-restricted-syntax */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import taskCreationSaga from './sagas.mock';
import defaultState from '../../server/defaultState';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    tasks(tasks = defaultState.tasks, action) {
      switch (action.type) {
        case mutations.CREATE_TASK:
          return [...tasks, {
            id: action.taskId,
            name: 'New task',
            group: action.groupId,
            owner: action.ownerId,
            isComplete: false,
          }];
        default:
          break;
      }
      return tasks;
    },
    comments(comments = defaultState.comments) {
      return comments;
    },
    groups(groups = defaultState.groups) {
      return groups;
    },
    users(users = defaultState.users) {
      return users;
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleware),
);

sagaMiddleware.run(taskCreationSaga);

export default store;
