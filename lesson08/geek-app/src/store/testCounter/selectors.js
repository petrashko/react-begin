// /* eslint-disable */

export const getTestCounter = (state) => state.testCounter;

export const getCount = (state) => getTestCounter(state).count;
