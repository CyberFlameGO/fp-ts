/**
 * @since 3.0.0
 */
import { identity } from './function'
import type { Functor } from './Functor'
import type { HKT, Kind, Typeclass } from './HKT'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category type classes
 * @since 3.0.0
 */
export interface Bifunctor<F extends HKT> extends Typeclass<F> {
  readonly mapBoth: <E, G, A, B>(
    f: (e: E) => G,
    g: (a: A) => B
  ) => <S, R, W>(self: Kind<F, S, R, W, E, A>) => Kind<F, S, R, W, G, B>
  readonly mapLeft: <E, G>(f: (e: E) => G) => <S, R, W, A>(self: Kind<F, S, R, W, E, A>) => Kind<F, S, R, W, G, A>
}
// -------------------------------------------------------------------------------------
// defaults
// -------------------------------------------------------------------------------------

/**
 * Return a default `mapLeft` implementation from `mapBoth`.
 *
 * @category defaults
 * @since 3.0.0
 */
export const mapLeftDefault =
  <F extends HKT>(mapBoth: Bifunctor<F>['mapBoth']): Bifunctor<F>['mapLeft'] =>
  <E, G>(f: (e: E) => G): (<S, R, W, A>(self: Kind<F, S, R, W, E, A>) => Kind<F, S, R, W, G, A>) =>
    mapBoth(f, identity)

/**
 * Return a default `map` implementation from `mapBoth`.
 *
 * @category defaults
 * @since 3.0.0
 */
export const mapDefault =
  <F extends HKT>(mapBoth: Bifunctor<F>['mapBoth']): Functor<F>['map'] =>
  <A, B>(f: (a: A) => B): (<S, R, W, E>(self: Kind<F, S, R, W, E, A>) => Kind<F, S, R, W, E, B>) =>
    mapBoth(identity, f)
