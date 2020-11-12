import { take, put } from 'redux-saga/effects';
import uuid from 'uuid';
import * as mutations from './mutations';

// eslint-disable-next-line import/prefer-default-export
function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerId = 'U1';
    const taskId = uuid();
    yield put(mutations.createTask(taskId, groupId, ownerId));
    console.info('Got group id', groupId);
  }
}

export default taskCreationSaga;
