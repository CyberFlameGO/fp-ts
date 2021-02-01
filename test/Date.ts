import * as _ from '../src/Date'
import { pipe } from '../src/function'
import { deepStrictEqual } from './util'

describe('Date', () => {
  it('create', () => {
    const d1 = _.create()
    const m2 = new Date().getTime()
    deepStrictEqual(d1 instanceof Date, true)
    deepStrictEqual(d1.getTime(), m2)
  })

  it('now', () => {
    const m1 = _.now()
    const m2 = new Date().getTime()
    deepStrictEqual(m1, m2)
  })

  it('EqDate', () => {
    deepStrictEqual(_.EqDate.equals(new Date(2000, 10, 1))(new Date(2000, 11, 1)), true)
    deepStrictEqual(_.EqDate.equals(new Date(2000, 10, 1))(new Date(2000, 11, 2)), false)
  })

  it('EqMonth', () => {
    deepStrictEqual(_.EqMonth.equals(new Date(2000, 10, 1))(new Date(2000, 10, 7)), true)
    deepStrictEqual(_.EqMonth.equals(new Date(2000, 10, 1))(new Date(2000, 11, 7)), false)
  })

  it('EqYear', () => {
    deepStrictEqual(_.EqYear.equals(new Date(2000, 10, 1))(new Date(2000, 11, 7)), true)
    deepStrictEqual(_.EqYear.equals(new Date(2000, 10, 1))(new Date(2001, 11, 7)), false)
  })

  it('eqDate', () => {
    deepStrictEqual(_.Eq.equals(new Date(0))(new Date(0)), true)
    deepStrictEqual(_.Eq.equals(new Date(0))(new Date(1)), false)
    deepStrictEqual(_.Eq.equals(new Date(1))(new Date(0)), false)
  })

  it('Ord', () => {
    deepStrictEqual(pipe(new Date(0), _.Ord.compare(new Date(0))), 0)
    deepStrictEqual(pipe(new Date(0), _.Ord.compare(new Date(1))), -1)
    deepStrictEqual(pipe(new Date(1), _.Ord.compare(new Date(0))), 1)
  })
})
