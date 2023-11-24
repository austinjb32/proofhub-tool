#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs = require("fs");
const path = require("path");
// Path to the shell script
const scriptPath = path.join(__dirname, "..", 'bin', 'proofhub-init.sh');
// Check if the script file exists
if (fs.existsSync(scriptPath)) {
    // Add execute permissions to the script
    const chmodResult = (0, child_process_1.spawnSync)('chmod', ['+x', scriptPath]);
    if (chmodResult.status === 0) {
        console.log(`Execute permissions added to ${scriptPath}`);
    }
    else {
        console.error(`Failed to add execute permissions to ${scriptPath}`);
    }
    // Execute the script
    const result = (0, child_process_1.spawnSync)(scriptPath, process.argv.slice(2), { stdio: 'inherit', shell: true });
    process.exit(result.status ? result.status : undefined);
}
else {
    console.error(`Script ${scriptPath} not found.`);
    process.exit(1);
}
