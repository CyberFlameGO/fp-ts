/**
 * The `FromThese` type class represents those data types which support errors and warnings.
 *
 * @since 3.0.0
 */
import { HKT2, Kind2, Kind3, Kind4, URIS2, URIS3, URIS4 } from './HKT'
import { These } from './These'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category type classes
 * @since 3.0.0
 */
export interface FromThese<F> {
  readonly URI?: F
  readonly fromThese: <E, A>(e: These<E, A>) => HKT2<F, E, A>
}

/**
 * @category type classes
 * @since 3.0.0
 */
export interface FromThese2<F extends URIS2> {
  readonly URI?: F
  readonly fromThese: <E, A>(e: These<E, A>) => Kind2<F, E, A>
}

/**
 * @category type classes
 * @since 3.0.0
 */
export interface FromThese2C<F extends URIS2, E> {
  readonly URI?: F
  readonly _E?: E
  readonly fromThese: <A>(e: These<E, A>) => Kind2<F, E, A>
}

/**
 * @category type classes
 * @since 3.0.0
 */
export interface FromThese3<F extends URIS3> {
  readonly URI?: F
  readonly fromThese: <E, A, R>(e: These<E, A>) => Kind3<F, R, E, A>
}

/**
 * @category type classes
 * @since 3.0.0
 */
export interface FromThese3C<F extends URIS3, E> {
  readonly URI?: F
  readonly _E?: E
  readonly fromThese: <A, R>(e: These<E, A>) => Kind3<F, R, E, A>
}

/**
 * @category type classes
 * @since 3.0.0
 */
export interface FromThese4<F extends URIS4> {
  readonly URI?: F
  readonly fromThese: <E, A, S, R>(e: These<E, A>) => Kind4<F, S, R, E, A>
}
