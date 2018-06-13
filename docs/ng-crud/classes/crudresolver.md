[ng-crud](../README.md) > [CrudResolver](../classes/crudresolver.md)

# Class: CrudResolver

## Hierarchy

**CrudResolver**

## Implements

* `Resolve`< `string` &#124; `string`[]>

## Index

### Constructors

* [constructor](crudresolver.md#constructor)

### Properties

* [blocking](crudresolver.md#blocking)
* [key](crudresolver.md#key)
* [route](crudresolver.md#route)
* [schema](crudresolver.md#schema)

### Methods

* [data](crudresolver.md#data)
* [params](crudresolver.md#params)
* [resolve](crudresolver.md#resolve)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CrudResolver**(crud: *[CrudService](crudservice.md)*): [CrudResolver](crudresolver.md)

*Defined in [src/crud.resolver.ts:12](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.resolver.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| crud | [CrudService](crudservice.md) |

**Returns:** [CrudResolver](crudresolver.md)

___

## Properties

<a id="blocking"></a>

###  blocking

**● blocking**: *`boolean`* = true

*Defined in [src/crud.resolver.ts:9](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.resolver.ts#L9)*

___
<a id="key"></a>

### `<Abstract>` key

**● key**: *`string`*

*Defined in [src/crud.resolver.ts:12](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.resolver.ts#L12)*

___
<a id="route"></a>

### `<Abstract>` route

**● route**: *`string`*

*Defined in [src/crud.resolver.ts:11](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.resolver.ts#L11)*

___
<a id="schema"></a>

### `<Abstract>` schema

**● schema**: * `Entity` &#124; `Entity`[]
*

*Defined in [src/crud.resolver.ts:10](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.resolver.ts#L10)*

___

## Methods

<a id="data"></a>

### `<Abstract>` data

▸ **data**(...params: *`any`[]*): `Observable`<`any`>

*Defined in [src/crud.resolver.ts:20](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.resolver.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` params | `any`[] |

**Returns:** `Observable`<`any`>

___
<a id="params"></a>

###  params

▸ **params**(route: *`FlatRouterStateSnapshot`*): `any`[]

*Defined in [src/crud.resolver.ts:16](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.resolver.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `FlatRouterStateSnapshot` |

**Returns:** `any`[]

___
<a id="resolve"></a>

###  resolve

▸ **resolve**(): `Observable`<`string`[]>

*Defined in [src/crud.resolver.ts:22](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.resolver.ts#L22)*

**Returns:** `Observable`<`string`[]>

___

