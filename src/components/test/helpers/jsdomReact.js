import ExecutionEnvironment from 'exenv';
import jsdom from 'mocha-jsdom';

export default () => {
  jsdom();
  ExecutionEnvironment.canUseDOM = true;
};
