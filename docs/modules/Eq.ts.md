---
title: Eq.ts
nav_order: 27
parent: Modules
---

## Eq overview

The `Eq` type class represents types which support decidable equality.

Instances must satisfy the following laws:

1. Reflexivity: `a |> equals(a) === true`
2. Symmetry: `a |> equals(b) === b |> equals(a)`
3. Transitivity: if `a |> equals(b) === true` and `b |> equals(c) === true`, then `a |> equals(c) === true`

Added in v3.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Contravariant](#contravariant)
  - [contramap](#contramap)
- [HKT](#hkt)
  - [EqF (interface)](#eqf-interface)
- [combinators](#combinators)
  - [struct](#struct)
  - [tuple](#tuple)
- [constructors](#constructors)
  - [fromEquals](#fromequals)
  - [fromOrd](#fromord)
- [instances](#instances)
  - [Contravariant](#contravariant-1)
  - [EqStrict](#eqstrict)
  - [getMonoid](#getmonoid)
  - [getSemigroup](#getsemigroup)
- [type classes](#type-classes)
  - [Eq (interface)](#eq-interface)

---

# Contravariant

## contramap

**Signature**

```ts
export declare const contramap: <B, A>(f: (b: B) => A) => (fa: Eq<A>) => Eq<B>
```

Added in v3.0.0

# HKT

## EqF (interface)

**Signature**

```ts
export interface EqF extends HKT {
  readonly type: Eq<this['Contravariant1']>
}
```

Added in v3.0.0

# combinators

## struct

**Signature**

```ts
export declare const struct: <A>(eqs: { [K in keyof A]: Eq<A[K]> }) => Eq<{ readonly [K in keyof A]: A[K] }>
```

Added in v3.0.0

## tuple

Given a tuple of `Eq`s returns a `Eq` for the tuple

**Signature**

```ts
export declare const tuple: <A extends readonly unknown[]>(
  ...eqs: { [K in keyof A]: Eq<A[K]> }
) => Eq<Readonly<Readonly<A>>>
```

**Example**

```ts
import { tuple } from 'fp-ts/Eq'
import * as S from 'fp-ts/string'
import * as N from 'fp-ts/number'
import * as B from 'fp-ts/boolean'

const E = tuple(S.Eq, N.Eq, B.Eq)
assert.strictEqual(E.equals(['a', 1, true])(['a', 1, true]), true)
assert.strictEqual(E.equals(['a', 1, true])(['b', 1, true]), false)
assert.strictEqual(E.equals(['a', 1, true])(['a', 2, true]), false)
assert.strictEqual(E.equals(['a', 1, true])(['a', 1, false]), false)
```

Added in v3.0.0

# constructors

## fromEquals

**Signature**

```ts
export declare const fromEquals: <A>(equals: (second: A) => (first: A) => boolean) => Eq<A>
```

Added in v3.0.0

## fromOrd

**Signature**

```ts
export declare const fromOrd: <A>(O: Ord<A>) => Eq<A>
```

Added in v3.0.0

# instances

## Contravariant

**Signature**

```ts
export declare const Contravariant: ContravariantModule.Contravariant<EqF>
```

Added in v3.0.0

## EqStrict

**Signature**

```ts
export declare const EqStrict: Eq<unknown>
```

Added in v3.0.0

## getMonoid

**Signature**

```ts
export declare const getMonoid: <A>() => Monoid<Eq<A>>
```

Added in v3.0.0

## getSemigroup

**Signature**

```ts
export declare const getSemigroup: <A>() => Semigroup<Eq<A>>
```

Added in v3.0.0

# type classes

## Eq (interface)

**Signature**

```ts
export interface Eq<A> {
  readonly equals: (second: A) => (first: A) => boolean
}
```

Added in v3.0.0
