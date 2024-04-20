#!/usr/bin/env zx

try {
  console.log('Copying FEWD lessons to the FEWD app...');
  await $`rm -rfd apps/fewd/public`;
  await $`mkdir -p apps/fewd/public/slides`;
  await $`cp -R lessons/src/lessons/fewd/** apps/fewd/public/slides/`;
} catch (p) {
  console.log(`Exit code: ${p.exitCode}`);
  console.log(`Error: ${p.stderr}`);
}
