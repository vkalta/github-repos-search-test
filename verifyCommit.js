'use strict';

const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs')
    .readFileSync(msgPath, 'utf-8')
    .trim();

const commitRE = /^(revert: |Merge.+)|(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|chore|types|wip|merge)(\(.+\))?: .+/;

if (!commitRE.test(msg)) {
    console.error(`ERROR: invalid commit message format`);
    process.exit(1);
}
