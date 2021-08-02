'use strict';

const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs')
    .readFileSync(msgPath, 'utf-8')
    .trim();
console.log('test', process.env.HUSKY_GIT_PARAMS);
const commitRE = /^(revert: |Merge.+)|(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|chore|types|wip|merge)(\(.+\))?: .+/;

if (!commitRE.test(msg)) {
    console.error(`ERROR: invalid commit message format`);
    process.exit(1);
}

/* eslint no-console: 0 */
// const chalk = require('chalk');
// const msgPath = process.env.HUSKY_GIT_PARAMS;
// const msg = require('fs')
//     .readFileSync(msgPath, 'utf-8')
//     .trim();

// const commitRE = /^(revert: |Merge.+)|(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|chore|types|wip|merge)(\(.+\))?: .+/;

// if (!commitRE.test(msg)) {
//     console.error(`  ${chalk.bgRed.white(' ERROR ')} ${chalk.red('invalid commit message format.')}\n\n`);
//     process.exit(1);
// }