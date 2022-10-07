import * as _ from '../src/Foldable'
import { pipe } from '../src/Function'
import * as S from '../src/string'
import * as O from '../src/Option'
import * as RA from '../src/ReadonlyArray'
import * as U from './util'
import * as number from '../src/number'

describe('Foldable', () => {
  it('toIterableComposition', () => {
    const toIterableComposition = _.toIterableComposition(RA.Foldable, O.Foldable)
    U.deepStrictEqual(Array.from(pipe([O.some('a'), O.none, O.some('c')], toIterableComposition)), ['a', 'c'])
  })

  it('map', () => {
    U.deepStrictEqual(
      Array.from(
        pipe(
          [1, 2, 3],
          _.map((n) => n * 2)
        )
      ),
      [2, 4, 6]
    )
  })

  it('foldMap', () => {
    U.deepStrictEqual(
      pipe(
        [1, 2, 3],
        _.foldMap(number.MonoidSum)((n) => n * 2)
      ),
      12
    )
  })

  it('filterMap', () => {
    U.deepStrictEqual(
      Array.from(
        pipe(
          [1, 2, 3],
          _.filterMap((n) => (n < 3 ? O.some(n) : O.none))
        )
      ),
      [1, 2]
    )
  })

  it('intercalate', () => {
    const intercalate = _.intercalate(S.Monoid)
    U.deepStrictEqual(pipe(['a', 'b', 'c'], intercalate(',')), 'a,b,c')
  })

  it('reduceKind', () => {
    const f = _.reduceKind(O.Flattenable)
    U.deepStrictEqual(
      pipe(
        [],
        f(O.some(1), () => O.none)
      ),
      O.some(1)
    )
    U.deepStrictEqual(
      pipe(
        [2],
        f(O.some(1), () => O.none)
      ),
      O.none
    )
    U.deepStrictEqual(
      pipe(
        [2],
        f(O.some(1), (b, a) => O.some(b + a))
      ),
      O.some(3)
    )
  })
})
