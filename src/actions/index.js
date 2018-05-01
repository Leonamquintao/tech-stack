/**
 * This Action creator is a helper to call actions.
 * @param  {Number} id expects the library ID
 * @return {[type]}
 */

export const selectLibrary = (id) => {
  return {
    type: 'select_library',
    payload: id
  };
};
