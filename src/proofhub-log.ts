#!/usr/bin/env node

import { spawnSync } from 'child_process';

const result = spawnSync('./bin/proofhub-log.sh', process.argv.slice(2), { stdio: 'inherit' });

process.exit(result.status?result.status:undefined);