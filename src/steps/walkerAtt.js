import { exec } from 'node:child_process';
import { walkerInitial } from './walkerInitial.js';
import { updateWalker } from './updateWalker.js';

export const walkerAtt = () => {
  exec('git pull', (err, output) => {
    if (err) {
      console.log(err)
    } else {
      if (output === 'Already up to date.\n') {
        walkerInitial()
      } else {
        updateWalker()
      }
    }
  })
}
