import axios from 'axios';

export const promiseHandler = async url => {
  try {
    const {data} = await axios.get(url);
    return [data, null];
  } catch (e) {
    return [null, e];
  }
};
