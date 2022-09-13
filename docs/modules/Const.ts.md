---
title: Const.ts
nav_order: 20
parent: Modules
---

## Const overview

The `Const` type constructor, which wraps its first type argument and ignores its second.
That is, `Const<E, A>` is isomorphic to `E` for any `A`.

`Const` has some useful instances. For example, the `Applicative` instance allows us to collect results using a `Monoid`
while ignoring return values.

Added in v3.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Bifunctor](#bifunctor)
  - [bimap](#bimap)
  - [mapLeft](#mapleft)
- [Contravariant](#contravariant)
  - [contramap](#contramap)
- [Functor](#functor)
  - [map](#map)
- [combinators](#combinators)
  - [flap](#flap)
- [constructors](#constructors)
  - [make](#make)
- [instances](#instances)
  - [Bifunctor](#bifunctor-1)
  - [ConstF (interface)](#constf-interface)
  - [ConstFE (interface)](#constfe-interface)
  - [ConstFR (interface)](#constfr-interface)
  - [Contravariant](#contravariant-1)
  - [Functor](#functor-1)
  - [getApplicative](#getapplicative)
  - [getApply](#getapply)
  - [getBooleanAlgebra](#getbooleanalgebra)
  - [getBounded](#getbounded)
  - [getEq](#geteq)
  - [getHeytingAlgebra](#getheytingalgebra)
  - [getMonoid](#getmonoid)
  - [getOrd](#getord)
  - [getRing](#getring)
  - [getSemigroup](#getsemigroup)
  - [getSemiring](#getsemiring)
  - [getShow](#getshow)
- [model](#model)
  - [Const (type alias)](#const-type-alias)

---

# Bifunctor

## bimap

Map a pair of functions over the two type arguments of the bifunctor.

**Signature**

```ts
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: Const<E, A>) => Const<G, B>
```

Added in v3.0.0

## mapLeft

Map a function over the first type argument of a bifunctor.

**Signature**

```ts
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fea: Const<E, A>) => Const<G, A>
```

Added in v3.0.0

# Contravariant

## contramap

**Signature**

```ts
export declare const contramap: <B, A>(f: (b: B) => A) => <E>(fa: Const<E, A>) => Const<E, B>
```

Added in v3.0.0

# Functor

## map

`map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
use the type constructor `F` to represent some computational context.

**Signature**

```ts
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Const<E, A>) => Const<E, B>
```

Added in v3.0.0

# combinators

## flap

Derivable from `Functor`.

**Signature**

```ts
export declare const flap: <A>(a: A) => <E, B>(fab: Const<E, (a: A) => B>) => Const<E, B>
```

Added in v3.0.0

# constructors

## make

**Signature**

```ts
export declare const make: <E, A = never>(e: E) => Const<E, A>
```

Added in v3.0.0

# instances

## Bifunctor

**Signature**

```ts
export declare const Bifunctor: Bifunctor_<ConstF>
```

Added in v3.0.0

## ConstF (interface)

**Signature**

```ts
export interface ConstF extends HKT {
  readonly type: Const<this['Covariant2'], this['Covariant1']>
}
```

Added in v3.0.0

## ConstFE (interface)

**Signature**

```ts
export interface ConstFE<E> extends HKT {
  readonly type: Const<E, this['Covariant1']>
}
```

Added in v3.0.0

## ConstFR (interface)

**Signature**

```ts
export interface ConstFR extends HKT {
  readonly type: Const<this['Covariant1'], this['Contravariant1']>
}
```

Added in v3.0.0

## Contravariant

**Signature**

```ts
export declare const Contravariant: Contravariant_<ConstFR>
```

Added in v3.0.0

## Functor

**Signature**

```ts
export declare const Functor: Functor_<ConstF>
```

Added in v3.0.0

## getApplicative

**Signature**

```ts
export declare const getApplicative: <E>(M: Monoid<E>) => Applicative<ConstFE<E>>
```

Added in v3.0.0

## getApply

**Signature**

```ts
export declare const getApply: <E>(S: Semigroup<E>) => Apply<ConstFE<E>>
```

Added in v3.0.0

## getBooleanAlgebra

**Signature**

```ts
export declare const getBooleanAlgebra: <E, A>(H: BooleanAlgebra<E>) => BooleanAlgebra<Const<E, A>>
```

Added in v3.0.0

## getBounded

**Signature**

```ts
export declare const getBounded: <E, A>(B: Bounded<E>) => Bounded<Const<E, A>>
```

Added in v3.0.0

## getEq

**Signature**

```ts
export declare const getEq: <E, A>(E: Eq<E>) => Eq<Const<E, A>>
```

Added in v3.0.0

## getHeytingAlgebra

**Signature**

```ts
export declare const getHeytingAlgebra: <E, A>(H: HeytingAlgebra<E>) => HeytingAlgebra<Const<E, A>>
```

Added in v3.0.0

## getMonoid

**Signature**

```ts
export declare const getMonoid: <E, A>(M: Monoid<E>) => Monoid<Const<E, A>>
```

Added in v3.0.0

## getOrd

**Signature**

```ts
export declare const getOrd: <E, A>(O: Ord<E>) => Ord<Const<E, A>>
```

Added in v3.0.0

## getRing

**Signature**

```ts
export declare const getRing: <E, A>(S: Ring<E>) => Ring<Const<E, A>>
```

Added in v3.0.0

## getSemigroup

**Signature**

```ts
export declare const getSemigroup: <E, A>(S: Semigroup<E>) => Semigroup<Const<E, A>>
```

Added in v3.0.0

## getSemiring

**Signature**

```ts
export declare const getSemiring: <E, A>(S: Semiring<E>) => Semiring<Const<E, A>>
```

Added in v3.0.0

## getShow

**Signature**

```ts
export declare const getShow: <E, A>(S: Show<E>) => Show<Const<E, A>>
```

Added in v3.0.0

# model

## Const (type alias)

**Signature**

```ts
export type Const<E, A> = E & { readonly _A: A }
```

Added in v3.0.0
