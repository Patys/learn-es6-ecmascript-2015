import * as _ from 'lodash';

import {sumTwo, sumThree} from './math/addition';
import {users} from './data/users';

console.log(_.filter(users, {age:20}));

console.log('2 + 3 = ', sumTwo(2,3));
console.log('2 + 3 + 4 = ', sumTwo(2,3,4));
