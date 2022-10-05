import { run } from './run'
import * as child_process from 'child_process'
import { left, succeed } from '../src/Either'
import type { TaskEither } from '../src/TaskEither'

const DIST = 'dist'

const exec =
  (cmd: string, args?: child_process.ExecOptions): TaskEither<Error, void> =>
  () =>
    new Promise((resolve) => {
      child_process.exec(cmd, args, (err) => {
        if (err !== null) {
          return resolve(left(err))
        }

        return resolve(succeed(undefined))
      })
    })

export const main = exec('npm publish --tag=next', {
  cwd: DIST
})

run(main)
