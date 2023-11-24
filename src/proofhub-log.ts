#!/usr/bin/env node

import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Path to the shell script
const scriptPath = path.join(__dirname,"..", 'bin', 'proofhub-log.sh');

// Check if the script file exists
if (fs.existsSync(scriptPath)) {
  // Add execute permissions to the script
  const chmodResult = spawnSync('chmod', ['+x', scriptPath]);

  if (chmodResult.status === 0) {
    console.log(`Execute permissions added to ${scriptPath}`);
  } else {
    console.error(`Failed to add execute permissions to ${scriptPath}`);
  }

  // Execute the script
  const result = spawnSync(scriptPath, process.argv.slice(2), { stdio: 'inherit', shell:true });
  process.exit(result.status ? result.status : undefined);
} else {
  console.error(`Script ${scriptPath} not found.`);
  process.exit(1);
}
