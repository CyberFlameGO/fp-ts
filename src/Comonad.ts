/**
 * @since 3.0.0
 */
import type { Extendable } from './Extendable'
import type { TypeLambda, Kind } from './HKT'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category type classes
 * @since 3.0.0
 */
export interface Comonad<F extends TypeLambda> extends Extendable<F> {
  readonly extract: <S, R, W, E, A>(self: Kind<F, S, R, W, E, A>) => A
}
