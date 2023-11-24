#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const result = (0, child_process_1.spawnSync)('./bin/proofhub-init.sh', process.argv.slice(2), { stdio: 'inherit' });
process.exit(result.status ? result.status : undefined);
