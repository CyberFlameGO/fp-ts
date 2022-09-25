/**
 * Lift a computation from the `Task` monad.
 *
 * @since 3.0.0
 */
import type { Flattenable } from './Flattenable'
import type { FromIO } from './FromIO'
import type { TypeLambda, Kind } from './HKT'
import type { Task } from './Task'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category type classes
 * @since 3.0.0
 */
export interface FromTask<F extends TypeLambda> extends FromIO<F> {
  readonly fromTask: <A, S>(fa: Task<A>) => Kind<F, S, unknown, never, never, A>
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 3.0.0
 */
export const fromTaskK =
  <F extends TypeLambda>(F: FromTask<F>) =>
  <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) =>
  <S>(...a: A): Kind<F, S, unknown, never, never, B> =>
    F.fromTask(f(...a))

/**
 * @category combinators
 * @since 3.0.0
 */
export const flatMapTaskK = <M extends TypeLambda>(
  F: FromTask<M>,
  M: Flattenable<M>
): (<A, B>(f: (a: A) => Task<B>) => <S, R, W, E>(self: Kind<M, S, R, W, E, A>) => Kind<M, S, R, W, E, B>) => {
  return (f) => M.flatMap((a) => F.fromTask(f(a)))
}
