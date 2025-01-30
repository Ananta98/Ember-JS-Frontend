import { helper } from '@ember/component/helper';

export function equals([a, b]) {
  return a === b;
}

export default helper(equals);
