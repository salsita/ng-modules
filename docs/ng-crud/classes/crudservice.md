[ng-crud](../README.md) > [CrudService](../classes/crudservice.md)

# Class: CrudService

## Hierarchy

**CrudService**

## Index

### Constructors

* [constructor](crudservice.md#constructor)

### Methods

* [handleRequest](crudservice.md#handlerequest)
* [resolve](crudservice.md#resolve)
* [storeCrudData](crudservice.md#storecruddata)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CrudService**(store: *`Store`<`any`>*, repo: *`EntityRepositoryService`*, routerSelectors: *`RouterSelectors`*): [CrudService](crudservice.md)

*Defined in [src/crud.service.ts:16](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.service.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| store | `Store`<`any`> |
| repo | `EntityRepositoryService` |
| routerSelectors | `RouterSelectors` |

**Returns:** [CrudService](crudservice.md)

___

## Methods

<a id="handlerequest"></a>

###  handleRequest

▸ **handleRequest**(data$: *`Observable`<`any`>*, entitySchema: * `Entity` &#124; `Entity`[]*, route: *`string`*, key: *`string`*): `Observable`< `string` &#124; `string`[]>

*Defined in [src/crud.service.ts:23](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.service.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| data$ | `Observable`<`any`> |
| entitySchema |  `Entity` &#124; `Entity`[]|
| route | `string` |
| key | `string` |

**Returns:** `Observable`< `string` &#124; `string`[]>

___
<a id="resolve"></a>

###  resolve

▸ **resolve**T(resolver: *`T`*): `Observable`<`any`>

*Defined in [src/crud.service.ts:39](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.service.ts#L39)*

**Type parameters:**

#### T :  [CrudResolver](crudresolver.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| resolver | `T` |

**Returns:** `Observable`<`any`>

___
<a id="storecruddata"></a>

###  storeCrudData

▸ **storeCrudData**(route: *`string`*, key: *`string`*, result: * `string` &#124; `string`[]*): `void`

*Defined in [src/crud.service.ts:35](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.service.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| route | `string` |
| key | `string` |
| result |  `string` &#124; `string`[]|

**Returns:** `void`

___

