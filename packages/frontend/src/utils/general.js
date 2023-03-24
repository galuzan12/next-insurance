import {DEBOUNCE_TIMEOUT} from '../config/constants';

let interval;
export const debounce = cb => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setTimeout(() => {
    cb();
  }, DEBOUNCE_TIMEOUT);
};
