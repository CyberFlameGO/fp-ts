---
title: EitherT.ts
nav_order: 25
parent: Modules
---

## EitherT overview

Added in v3.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [alt](#alt)
  - [altValidation](#altvalidation)
  - [ap](#ap)
  - [bimap](#bimap)
  - [bracket](#bracket)
  - [chain](#chain)
  - [chainNullableK](#chainnullablek)
  - [fromNullable](#fromnullable)
  - [fromNullableK](#fromnullablek)
  - [getOrElse](#getorelse)
  - [getOrElseE](#getorelsee)
  - [left](#left)
  - [leftF](#leftf)
  - [map](#map)
  - [mapLeft](#mapleft)
  - [match](#match)
  - [matchE](#matche)
  - [orElse](#orelse)
  - [orElseFirst](#orelsefirst)
  - [orLeft](#orleft)
  - [right](#right)
  - [rightF](#rightf)
  - [swap](#swap)
  - [toUnion](#tounion)

---

# utils

## alt

**Signature**

```ts
export declare function alt<M extends URIS3>(
  M: Monad3<M>
): <R, ME, E, A>(
  second: Lazy<Kind3<M, R, ME, Either<E, A>>>
) => (first: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, Either<E, A>>
export declare function alt<M extends URIS3, ME>(
  M: Monad3C<M, ME>
): <R, E, A>(
  second: Lazy<Kind3<M, R, ME, Either<E, A>>>
) => (first: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, Either<E, A>>
export declare function alt<M extends URIS2>(
  M: Monad2<M>
): <ME, E, A>(
  second: Lazy<Kind2<M, ME, Either<E, A>>>
) => (first: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, Either<E, A>>
export declare function alt<M extends URIS2, ME>(
  M: Monad2C<M, ME>
): <E, A>(second: Lazy<Kind2<M, ME, Either<E, A>>>) => (first: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, Either<E, A>>
export declare function alt<M extends URIS>(
  M: Monad1<M>
): <E, A>(second: Lazy<Kind<M, Either<E, A>>>) => (first: Kind<M, Either<E, A>>) => Kind<M, Either<E, A>>
export declare function alt<M>(
  M: Monad<M>
): <E, A>(second: Lazy<HKT<M, Either<E, A>>>) => (first: HKT<M, Either<E, A>>) => HKT<M, Either<E, A>>
```

Added in v3.0.0

## altValidation

**Signature**

```ts
export declare function altValidation<M extends URIS3, E>(
  M: Monad3<M>,
  S: Semigroup<E>
): <R, ME, A>(
  second: Lazy<Kind3<M, R, ME, Either<E, A>>>
) => (first: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, Either<E, A>>
export declare function altValidation<M extends URIS3, ME, E>(
  M: Monad3C<M, ME>,
  S: Semigroup<E>
): <R, A>(
  second: Lazy<Kind3<M, R, ME, Either<E, A>>>
) => (first: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, Either<E, A>>
export declare function altValidation<M extends URIS2, E>(
  M: Monad2<M>,
  S: Semigroup<E>
): <ME, A>(
  second: Lazy<Kind2<M, ME, Either<E, A>>>
) => (first: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, Either<E, A>>
export declare function altValidation<M extends URIS2, ME, E>(
  M: Monad2C<M, ME>,
  S: Semigroup<E>
): <A>(second: Lazy<Kind2<M, ME, Either<E, A>>>) => (first: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, Either<E, A>>
export declare function altValidation<M extends URIS, E>(
  M: Monad1<M>,
  S: Semigroup<E>
): <A>(second: Lazy<Kind<M, Either<E, A>>>) => (first: Kind<M, Either<E, A>>) => Kind<M, Either<E, A>>
export declare function altValidation<M, E>(
  M: Monad<M>,
  S: Semigroup<E>
): <A>(second: Lazy<HKT<M, Either<E, A>>>) => (first: HKT<M, Either<E, A>>) => HKT<M, Either<E, A>>
```

Added in v3.0.0

## ap

**Signature**

```ts
export declare function ap<F extends URIS3>(
  F: Apply3<F>
): <R, FE, E, A>(
  fa: Kind3<F, R, FE, Either<E, A>>
) => <B>(fab: Kind3<F, R, FE, Either<E, (a: A) => B>>) => Kind3<F, R, FE, Either<E, B>>
export declare function ap<F extends URIS3, FE>(
  F: Apply3C<F, FE>
): <R, E, A>(
  fa: Kind3<F, R, FE, Either<E, A>>
) => <B>(fab: Kind3<F, R, FE, Either<E, (a: A) => B>>) => Kind3<F, R, FE, Either<E, B>>
export declare function ap<F extends URIS2>(
  F: Apply2<F>
): <FE, E, A>(
  fa: Kind2<F, FE, Either<E, A>>
) => <B>(fab: Kind2<F, FE, Either<E, (a: A) => B>>) => Kind2<F, FE, Either<E, B>>
export declare function ap<F extends URIS2, FE>(
  F: Apply2C<F, FE>
): <E, A>(
  fa: Kind2<F, FE, Either<E, A>>
) => <B>(fab: Kind2<F, FE, Either<E, (a: A) => B>>) => Kind2<F, FE, Either<E, B>>
export declare function ap<F extends URIS>(
  F: Apply1<F>
): <E, A>(fa: Kind<F, Either<E, A>>) => <B>(fab: Kind<F, Either<E, (a: A) => B>>) => Kind<F, Either<E, B>>
export declare function ap<F>(
  F: Apply<F>
): <E, A>(fa: HKT<F, Either<E, A>>) => <B>(fab: HKT<F, Either<E, (a: A) => B>>) => HKT<F, Either<E, B>>
```

Added in v3.0.0

## bimap

**Signature**

```ts
export declare function bimap<F extends URIS3>(
  F: Functor3<F>
): <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B
) => <R, FE>(fea: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, Either<G, B>>
export declare function bimap<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B
) => <R>(fea: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, Either<G, B>>
export declare function bimap<F extends URIS2>(
  F: Functor2<F>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => <FE>(fea: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, Either<G, B>>
export declare function bimap<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, Either<G, B>>
export declare function bimap<F extends URIS>(
  F: Functor1<F>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: Kind<F, Either<E, A>>) => Kind<F, Either<G, B>>
export declare function bimap<F>(
  F: Functor<F>
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: HKT<F, Either<E, A>>) => HKT<F, Either<G, B>>
```

Added in v3.0.0

## bracket

**Signature**

```ts
export declare function bracket<M extends URIS2>(
  M: Monad2<M>
): <ME, E, A, B>(
  acquire: Kind2<M, ME, Either<E, A>>,
  use: (a: A) => Kind2<M, ME, Either<E, B>>,
  release: (a: A, e: Either<E, B>) => Kind2<M, ME, Either<E, void>>
) => Kind2<M, ME, Either<E, B>>
export declare function bracket<M extends URIS2, ME>(
  M: Monad2C<M, ME>
): <E, A, B>(
  acquire: Kind2<M, ME, Either<E, A>>,
  use: (a: A) => Kind2<M, ME, Either<E, B>>,
  release: (a: A, e: Either<E, B>) => Kind2<M, ME, Either<E, void>>
) => Kind2<M, ME, Either<E, B>>
export declare function bracket<M extends URIS>(
  M: Monad1<M>
): <E, A, B>(
  acquire: Kind<M, Either<E, A>>,
  use: (a: A) => Kind<M, Either<E, B>>,
  release: (a: A, e: Either<E, B>) => Kind<M, Either<E, void>>
) => Kind<M, Either<E, B>>
export declare function bracket<M>(
  M: Monad<M>
): <E, A, B>(
  acquire: HKT<M, Either<E, A>>,
  use: (a: A) => HKT<M, Either<E, B>>,
  release: (a: A, e: Either<E, B>) => HKT<M, Either<E, void>>
) => HKT<M, Either<E, B>>
```

Added in v3.0.0

## chain

**Signature**

```ts
export declare function chain<M extends URIS3>(
  M: Monad3<M>
): <A, R, ME, E, B>(
  f: (a: A) => Kind3<M, R, ME, Either<E, B>>
) => (ma: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, Either<E, B>>
export declare function chain<M extends URIS3, ME>(
  M: Monad3C<M, ME>
): <A, R, E, B>(
  f: (a: A) => Kind3<M, R, ME, Either<E, B>>
) => (ma: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, Either<E, B>>
export declare function chain<M extends URIS2>(
  M: Monad2<M>
): <A, ME, E, B>(
  f: (a: A) => Kind2<M, ME, Either<E, B>>
) => (ma: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, Either<E, B>>
export declare function chain<M extends URIS2, ME>(
  M: Monad2C<M, ME>
): <A, E, B>(f: (a: A) => Kind2<M, ME, Either<E, B>>) => (ma: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, Either<E, B>>
export declare function chain<M extends URIS>(
  M: Monad1<M>
): <A, E, B>(f: (a: A) => Kind<M, Either<E, B>>) => (ma: Kind<M, Either<E, A>>) => Kind<M, Either<E, B>>
export declare function chain<M>(
  M: Monad<M>
): <A, E, B>(f: (a: A) => HKT<M, Either<E, B>>) => (ma: HKT<M, Either<E, A>>) => HKT<M, Either<E, B>>
```

Added in v3.0.0

## chainNullableK

**Signature**

```ts
export declare function chainNullableK<M extends URIS3>(
  M: Monad3<M>
): <E>(
  e: E
) => <A, B>(
  f: (a: A) => B | null | undefined
) => <S, R>(ma: Kind3<M, S, R, Either<E, A>>) => Kind3<M, S, R, Either<E, NonNullable<B>>>
export declare function chainNullableK<M extends URIS3, R>(
  M: Monad3C<M, R>
): <E>(
  e: E
) => <A, B>(
  f: (a: A) => B | null | undefined
) => <S>(ma: Kind3<M, S, R, Either<E, A>>) => Kind3<M, S, R, Either<E, NonNullable<B>>>
export declare function chainNullableK<M extends URIS2>(
  M: Monad2<M>
): <E>(
  e: E
) => <A, B>(
  f: (a: A) => B | null | undefined
) => <R>(ma: Kind2<M, R, Either<E, A>>) => Kind2<M, R, Either<E, NonNullable<B>>>
export declare function chainNullableK<M extends URIS2, T>(
  M: Monad2C<M, T>
): <E>(
  e: E
) => <A, B>(
  f: (a: A) => B | null | undefined
) => (ma: Kind2<M, T, Either<E, A>>) => Kind2<M, T, Either<E, NonNullable<B>>>
export declare function chainNullableK<M extends URIS>(
  M: Monad1<M>
): <E>(
  e: E
) => <A, B>(f: (a: A) => B | null | undefined) => (ma: Kind<M, Either<E, A>>) => Kind<M, Either<E, NonNullable<B>>>
export declare function chainNullableK<M>(
  M: Monad<M>
): <E>(
  e: E
) => <A, B>(f: (a: A) => B | null | undefined) => (ma: HKT<M, Either<E, A>>) => HKT<M, Either<E, NonNullable<B>>>
```

Added in v3.0.0

## fromNullable

**Signature**

```ts
export declare function fromNullable<F extends URIS3>(
  F: Pointed3<F>
): <E>(e: E) => <A, S, R>(a: A) => Kind3<F, S, R, Either<E, NonNullable<A>>>
export declare function fromNullable<F extends URIS3, R>(
  F: Pointed3C<F, R>
): <E>(e: E) => <A, S>(a: A) => Kind3<F, S, R, Either<E, NonNullable<A>>>
export declare function fromNullable<F extends URIS2>(
  F: Pointed2<F>
): <E>(e: E) => <A, R>(a: A) => Kind2<F, R, Either<E, NonNullable<A>>>
export declare function fromNullable<F extends URIS2, R>(
  F: Pointed2C<F, R>
): <E>(e: E) => <A>(a: A) => Kind2<F, R, Either<E, NonNullable<A>>>
export declare function fromNullable<F extends URIS>(
  F: Pointed1<F>
): <E>(e: E) => <A>(a: A) => Kind<F, Either<E, NonNullable<A>>>
export declare function fromNullable<F>(F: Pointed<F>): <E>(e: E) => <A>(a: A) => HKT<F, Either<E, NonNullable<A>>>
```

Added in v3.0.0

## fromNullableK

**Signature**

```ts
export declare function fromNullableK<F extends URIS3>(
  F: Pointed3<F>
): <E>(
  e: E
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined
) => <S, R>(...a: A) => Kind3<F, S, R, Either<E, NonNullable<B>>>
export declare function fromNullableK<F extends URIS3, R>(
  F: Pointed3C<F, R>
): <E>(
  e: E
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined
) => <S>(...a: A) => Kind3<F, S, R, Either<E, NonNullable<B>>>
export declare function fromNullableK<F extends URIS2>(
  F: Pointed2<F>
): <E>(
  e: E
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined
) => <R>(...a: A) => Kind2<F, R, Either<E, NonNullable<B>>>
export declare function fromNullableK<F extends URIS2, R>(
  F: Pointed2C<F, R>
): <E>(
  e: E
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined
) => (...a: A) => Kind2<F, R, Either<E, NonNullable<B>>>
export declare function fromNullableK<F extends URIS>(
  F: Pointed1<F>
): <E>(
  e: E
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined
) => (...a: A) => Kind<F, Either<E, NonNullable<B>>>
export declare function fromNullableK<F>(
  F: Pointed<F>
): <E>(
  e: E
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined
) => (...a: A) => HKT<F, Either<E, NonNullable<B>>>
```

Added in v3.0.0

## getOrElse

**Signature**

```ts
export declare function getOrElse<F extends URIS3>(
  F: Functor3<F>
): <E, A>(onLeft: (e: E) => A) => <R, ME>(ma: Kind3<F, R, ME, Either<E, A>>) => Kind3<F, R, ME, A>
export declare function getOrElse<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <E, A>(onLeft: (e: E) => A) => <R>(ma: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, A>
export declare function getOrElse<F extends URIS2>(
  F: Functor2<F>
): <E, A>(onLeft: (e: E) => A) => <FE>(ma: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, A>
export declare function getOrElse<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, A>(onLeft: (e: E) => A) => (ma: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, A>
export declare function getOrElse<F extends URIS>(
  F: Functor1<F>
): <E, A>(onLeft: (e: E) => A) => (ma: Kind<F, Either<E, A>>) => Kind<F, A>
export declare function getOrElse<F>(
  F: Functor<F>
): <E, A>(onLeft: (e: E) => A) => (ma: HKT<F, Either<E, A>>) => HKT<F, A>
```

Added in v3.0.0

## getOrElseE

**Signature**

```ts
export declare function getOrElseE<M extends URIS3>(
  M: Monad3<M>
): <E, R, ME, A>(onLeft: (e: E) => Kind3<M, R, ME, A>) => (ma: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, A>
export declare function getOrElseE<M extends URIS3, ME>(
  M: Monad3C<M, ME>
): <E, R, A>(onLeft: (e: E) => Kind3<M, R, ME, A>) => (ma: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, A>
export declare function getOrElseE<M extends URIS2>(
  M: Monad2<M>
): <E, ME, A>(onLeft: (e: E) => Kind2<M, ME, A>) => (ma: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, A>
export declare function getOrElseE<M extends URIS2, ME>(
  M: Monad2C<M, ME>
): <E, A>(onLeft: (e: E) => Kind2<M, ME, A>) => (ma: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, A>
export declare function getOrElseE<M extends URIS>(
  M: Monad1<M>
): <E, A>(onLeft: (e: E) => Kind<M, A>) => (ma: Kind<M, Either<E, A>>) => Kind<M, A>
export declare function getOrElseE<M>(
  M: Monad<M>
): <E, A>(onLeft: (e: E) => HKT<M, A>) => (ma: HKT<M, Either<E, A>>) => HKT<M, A>
```

Added in v3.0.0

## left

**Signature**

```ts
export declare function left<F extends URIS3>(
  F: Pointed3<F>
): <E, R, FE, A = never>(e: E) => Kind3<F, R, FE, Either<E, A>>
export declare function left<F extends URIS3, FE>(
  F: Pointed3C<F, FE>
): <E, R, A = never>(e: E) => Kind3<F, R, FE, Either<E, A>>
export declare function left<F extends URIS2>(F: Pointed2<F>): <E, FE, A = never>(e: E) => Kind2<F, FE, Either<E, A>>
export declare function left<F extends URIS2, FE>(
  F: Pointed2C<F, FE>
): <E, A = never>(e: E) => Kind2<F, FE, Either<E, A>>
export declare function left<F extends URIS>(F: Pointed1<F>): <E, A = never>(e: E) => Kind<F, Either<E, A>>
export declare function left<F>(F: Pointed<F>): <E, A = never>(e: E) => HKT<F, Either<E, A>>
```

Added in v3.0.0

## leftF

**Signature**

```ts
export declare function leftF<F extends URIS3>(
  F: Functor3<F>
): <R, FE, E, A = never>(fe: Kind3<F, R, FE, E>) => Kind3<F, R, FE, Either<E, A>>
export declare function leftF<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <R, E, A = never>(fe: Kind3<F, R, FE, E>) => Kind3<F, R, FE, Either<E, A>>
export declare function leftF<F extends URIS2>(
  F: Functor2<F>
): <FE, E, A = never>(fe: Kind2<F, FE, E>) => Kind2<F, FE, Either<E, A>>
export declare function leftF<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, A = never>(fe: Kind2<F, FE, E>) => Kind2<F, FE, Either<E, A>>
export declare function leftF<F extends URIS>(F: Functor1<F>): <E, A = never>(fe: Kind<F, E>) => Kind<F, Either<E, A>>
export declare function leftF<F>(F: Functor<F>): <E, A = never>(fe: HKT<F, E>) => HKT<F, Either<E, A>>
```

Added in v3.0.0

## map

**Signature**

```ts
export declare function map<F extends URIS3>(
  F: Functor3<F>
): <A, B>(f: (a: A) => B) => <R, FE, E>(fa: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, Either<E, B>>
export declare function map<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <A, B>(f: (a: A) => B) => <R, E>(fa: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, Either<E, B>>
export declare function map<F extends URIS2>(
  F: Functor2<F>
): <A, B>(f: (a: A) => B) => <FE, E>(fa: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, Either<E, B>>
export declare function map<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <A, B>(f: (a: A) => B) => <E>(fa: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, Either<E, B>>
export declare function map<F extends URIS>(
  F: Functor1<F>
): <A, B>(f: (a: A) => B) => <E>(fa: Kind<F, Either<E, A>>) => Kind<F, Either<E, B>>
export declare function map<F>(
  F: Functor<F>
): <A, B>(f: (a: A) => B) => <E>(fa: HKT<F, Either<E, A>>) => HKT<F, Either<E, B>>
```

Added in v3.0.0

## mapLeft

**Signature**

```ts
export declare function mapLeft<F extends URIS3>(
  F: Functor3<F>
): <E, G>(f: (e: E) => G) => <R, FE, A>(fea: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, Either<G, A>>
export declare function mapLeft<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <E, G>(f: (e: E) => G) => <R, A>(fea: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, Either<G, A>>
export declare function mapLeft<F extends URIS2>(
  F: Functor2<F>
): <E, G>(f: (e: E) => G) => <FE, A>(fea: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, Either<G, A>>
export declare function mapLeft<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, G>(f: (e: E) => G) => <A>(fea: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, Either<G, A>>
export declare function mapLeft<F extends URIS>(
  F: Functor1<F>
): <E, G>(f: (e: E) => G) => <A>(fea: Kind<F, Either<E, A>>) => Kind<F, Either<G, A>>
export declare function mapLeft<F>(
  F: Functor<F>
): <E, G>(f: (e: E) => G) => <A>(fea: HKT<F, Either<E, A>>) => HKT<F, Either<G, A>>
```

Added in v3.0.0

## match

**Signature**

```ts
export declare function match<F extends URIS3>(
  F: Functor3<F>
): <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B
) => <R, ME>(ma: Kind3<F, R, ME, Either<E, A>>) => Kind3<F, R, ME, B>
export declare function match<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <E, B, A>(onLeft: (e: E) => B, onRight: (a: A) => B) => <R>(ma: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, B>
export declare function match<F extends URIS2>(
  F: Functor2<F>
): <E, B, A>(onLeft: (e: E) => B, onRight: (a: A) => B) => <FE>(ma: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, B>
export declare function match<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, B, A>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, B>
export declare function match<F extends URIS>(
  F: Functor1<F>
): <E, B, A>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: Kind<F, Either<E, A>>) => Kind<F, B>
export declare function match<F>(
  F: Functor<F>
): <E, B, A>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: HKT<F, Either<E, A>>) => HKT<F, B>
```

Added in v3.0.0

## matchE

**Signature**

```ts
export declare function matchE<M extends URIS3>(
  M: Chain3<M>
): <E, R, ME, B, A>(
  onLeft: (e: E) => Kind3<M, R, ME, B>,
  onRight: (a: A) => Kind3<M, R, ME, B>
) => (ma: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, B>
export declare function matchE<M extends URIS3, ME>(
  M: Chain3C<M, ME>
): <E, R, B, A>(
  onLeft: (e: E) => Kind3<M, R, ME, B>,
  onRight: (a: A) => Kind3<M, R, ME, B>
) => (ma: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, B>
export declare function matchE<M extends URIS2>(
  M: Chain2<M>
): <E, ME, B, A>(
  onLeft: (e: E) => Kind2<M, ME, B>,
  onRight: (a: A) => Kind2<M, ME, B>
) => (ma: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, B>
export declare function matchE<M extends URIS2, ME>(
  M: Chain2C<M, ME>
): <E, B, A>(
  onLeft: (e: E) => Kind2<M, ME, B>,
  onRight: (a: A) => Kind2<M, ME, B>
) => (ma: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, B>
export declare function matchE<M extends URIS>(
  M: Chain1<M>
): <E, B, A>(onLeft: (e: E) => Kind<M, B>, onRight: (a: A) => Kind<M, B>) => (ma: Kind<M, Either<E, A>>) => Kind<M, B>
export declare function matchE<M>(
  M: Chain<M>
): <E, B, A>(onLeft: (e: E) => HKT<M, B>, onRight: (a: A) => HKT<M, B>) => (ma: HKT<M, Either<E, A>>) => HKT<M, B>
```

Added in v3.0.0

## orElse

**Signature**

```ts
export declare function orElse<M extends URIS3>(
  M: Monad3<M>
): <E1, R, ME, E2, A>(
  onLeft: (e: E1) => Kind3<M, R, ME, Either<E2, A>>
) => (ma: Kind3<M, R, ME, Either<E1, A>>) => Kind3<M, R, ME, Either<E2, A>>
export declare function orElse<M extends URIS3, ME>(
  M: Monad3C<M, ME>
): <E1, R, E2, A>(
  onLeft: (e: E1) => Kind3<M, R, ME, Either<E2, A>>
) => (ma: Kind3<M, R, ME, Either<E1, A>>) => Kind3<M, R, ME, Either<E2, A>>
export declare function orElse<M extends URIS2>(
  M: Monad2<M>
): <E1, ME, E2, A>(
  onLeft: (e: E1) => Kind2<M, ME, Either<E2, A>>
) => (ma: Kind2<M, ME, Either<E1, A>>) => Kind2<M, ME, Either<E2, A>>
export declare function orElse<M extends URIS2, ME>(
  M: Monad2C<M, ME>
): <E1, E2, A>(
  onLeft: (e: E1) => Kind2<M, ME, Either<E2, A>>
) => (ma: Kind2<M, ME, Either<E1, A>>) => Kind2<M, ME, Either<E2, A>>
export declare function orElse<M extends URIS>(
  M: Monad1<M>
): <E1, E2, A>(onLeft: (e: E1) => Kind<M, Either<E2, A>>) => (ma: Kind<M, Either<E1, A>>) => Kind<M, Either<E2, A>>
export declare function orElse<M>(
  M: Monad<M>
): <E1, E2, A>(onLeft: (e: E1) => HKT<M, Either<E2, A>>) => (ma: HKT<M, Either<E1, A>>) => HKT<M, Either<E2, A>>
```

Added in v3.0.0

## orElseFirst

**Signature**

```ts
export declare function orElseFirst<M extends URIS3>(
  M: Monad3<M>
): <E, R, ME, B>(
  onLeft: (e: E) => Kind3<M, R, ME, Either<E, B>>
) => <A>(ma: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, Either<E, A>>
export declare function orElseFirst<M extends URIS3, ME>(
  M: Monad3C<M, ME>
): <E, R, B>(
  onLeft: (e: E) => Kind3<M, R, ME, Either<E, B>>
) => <A>(ma: Kind3<M, R, ME, Either<E, A>>) => Kind3<M, R, ME, Either<E, A>>
export declare function orElseFirst<M extends URIS2>(
  M: Monad2<M>
): <E, ME, B>(
  onLeft: (e: E) => Kind2<M, ME, Either<E, B>>
) => <A>(ma: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, Either<E, A>>
export declare function orElseFirst<M extends URIS2, ME>(
  M: Monad2C<M, ME>
): <E, B>(
  onLeft: (e: E) => Kind2<M, ME, Either<E, B>>
) => <A>(ma: Kind2<M, ME, Either<E, A>>) => Kind2<M, ME, Either<E, A>>
export declare function orElseFirst<M extends URIS>(
  M: Monad1<M>
): <E, B>(onLeft: (e: E) => Kind<M, Either<E, B>>) => <A>(ma: Kind<M, Either<E, A>>) => Kind<M, Either<E, A>>
export declare function orElseFirst<M>(
  M: Monad<M>
): <E, B>(onLeft: (e: E) => HKT<M, Either<E, B>>) => <A>(ma: HKT<M, Either<E, A>>) => HKT<M, Either<E, A>>
```

Added in v3.0.0

## orLeft

**Signature**

```ts
export declare function orLeft<M extends URIS3>(
  M: Monad3<M>
): <E1, R, ME, E2>(
  onLeft: (e: E1) => Kind3<M, R, ME, E2>
) => <A>(fa: Kind3<M, R, ME, Either<E1, A>>) => Kind3<M, R, ME, Either<E2, A>>
export declare function orLeft<M extends URIS3, ME>(
  M: Monad3C<M, ME>
): <E1, R, E2>(
  onLeft: (e: E1) => Kind3<M, R, ME, E2>
) => <A>(fa: Kind3<M, R, ME, Either<E1, A>>) => Kind3<M, R, ME, Either<E2, A>>
export declare function orLeft<M extends URIS2>(
  M: Monad2<M>
): <E1, ME, E2>(
  onLeft: (e: E1) => Kind2<M, ME, E2>
) => <A>(fa: Kind2<M, ME, Either<E1, A>>) => Kind2<M, ME, Either<E2, A>>
export declare function orLeft<M extends URIS2, ME>(
  M: Monad2C<M, ME>
): <E1, E2>(onLeft: (e: E1) => Kind2<M, ME, E2>) => <A>(fa: Kind2<M, ME, Either<E1, A>>) => Kind2<M, ME, Either<E2, A>>
export declare function orLeft<M extends URIS>(
  M: Monad1<M>
): <E1, E2>(onLeft: (e: E1) => Kind<M, E2>) => <A>(fa: Kind<M, Either<E1, A>>) => Kind<M, Either<E2, A>>
export declare function orLeft<M>(
  M: Monad<M>
): <E1, E2>(onLeft: (e: E1) => HKT<M, E2>) => <A>(fa: HKT<M, Either<E1, A>>) => HKT<M, Either<E2, A>>
```

Added in v3.0.0

## right

**Signature**

```ts
export declare function right<F extends URIS3>(
  F: Pointed3<F>
): <A, R, FE, E = never>(a: A) => Kind3<F, R, FE, Either<E, A>>
export declare function right<F extends URIS3, FE>(
  F: Pointed3C<F, FE>
): <A, R, E = never>(a: A) => Kind3<F, R, FE, Either<E, A>>
export declare function right<F extends URIS2>(F: Pointed2<F>): <A, FE, E = never>(a: A) => Kind2<F, FE, Either<E, A>>
export declare function right<F extends URIS2, FE>(
  F: Pointed2C<F, FE>
): <A, E = never>(a: A) => Kind2<F, FE, Either<E, A>>
export declare function right<F extends URIS>(F: Pointed1<F>): <A, E = never>(a: A) => Kind<F, Either<E, A>>
export declare function right<F>(F: Pointed<F>): <A, E = never>(a: A) => HKT<F, Either<E, A>>
```

Added in v3.0.0

## rightF

**Signature**

```ts
export declare function rightF<F extends URIS3>(
  F: Functor3<F>
): <R, FE, A, E = never>(fa: Kind3<F, R, FE, A>) => Kind3<F, R, FE, Either<E, A>>
export declare function rightF<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <R, A, E = never>(fa: Kind3<F, R, FE, A>) => Kind3<F, R, FE, Either<E, A>>
export declare function rightF<F extends URIS2>(
  F: Functor2<F>
): <FE, A, E = never>(fa: Kind2<F, FE, A>) => Kind2<F, FE, Either<E, A>>
export declare function rightF<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <A, E = never>(fa: Kind2<F, FE, A>) => Kind2<F, FE, Either<E, A>>
export declare function rightF<F extends URIS>(F: Functor1<F>): <A, E = never>(fa: Kind<F, A>) => Kind<F, Either<E, A>>
export declare function rightF<F>(F: Functor<F>): <A, E = never>(fa: HKT<F, A>) => HKT<F, Either<E, A>>
```

Added in v3.0.0

## swap

**Signature**

```ts
export declare function swap<F extends URIS3>(
  F: Functor3<F>
): <R, FE, E, A>(ma: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, Either<A, E>>
export declare function swap<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <R, E, A>(ma: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, Either<A, E>>
export declare function swap<F extends URIS2>(
  F: Functor2<F>
): <FE, E, A>(ma: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, Either<A, E>>
export declare function swap<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, A>(ma: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, Either<A, E>>
export declare function swap<F extends URIS>(F: Functor1<F>): <E, A>(ma: Kind<F, Either<E, A>>) => Kind<F, Either<A, E>>
export declare function swap<F>(F: Functor<F>): <E, A>(ma: HKT<F, Either<E, A>>) => HKT<F, Either<A, E>>
```

Added in v3.0.0

## toUnion

**Signature**

```ts
export declare function toUnion<F extends URIS3>(
  F: Functor3<F>
): <R, FE, E, A>(fa: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, E | A>
export declare function toUnion<F extends URIS3, FE>(
  F: Functor3C<F, FE>
): <R, E, A>(fa: Kind3<F, R, FE, Either<E, A>>) => Kind3<F, R, FE, E | A>
export declare function toUnion<F extends URIS2>(
  F: Functor2<F>
): <FE, E, A>(fa: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, E | A>
export declare function toUnion<F extends URIS2, FE>(
  F: Functor2C<F, FE>
): <E, A>(fa: Kind2<F, FE, Either<E, A>>) => Kind2<F, FE, E | A>
export declare function toUnion<F extends URIS>(F: Functor1<F>): <E, A>(fa: Kind<F, Either<E, A>>) => Kind<F, E | A>
export declare function toUnion<F>(F: Functor<F>): <E, A>(fa: HKT<F, Either<E, A>>) => HKT<F, E | A>
```

Added in v3.0.0
