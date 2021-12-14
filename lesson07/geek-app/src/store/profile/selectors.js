// /* eslint-disable */

export const getProfile = (state) => state.profile;

export const getName = (state) => getProfile(state).name;

export const getIsShowName = (state) => getProfile(state).isShowName;
