
#  ngrx-helpers

## Index

### Classes

* [Action](classes/action.md)
* [ActionCreatorFactory](classes/actioncreatorfactory.md)

### Interfaces

* [Handlers](interfaces/handlers.md)

### Type aliases

* [actionCreator](#actioncreator)
* [reducerType](#reducertype)

### Functions

* [createReducer](#createreducer)

---

## Type aliases

<a id="actioncreator"></a>

###  actionCreator

**ΤactionCreator**: *`function`*

*Defined in [src/action-creator-factory.ts:11](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ngrx-helpers/src/action-creator-factory.ts#L11)*

#### Type declaration
▸(payload?: *[T]()*): [Action](classes/action.md)<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` payload | [T]() |

**Returns:** [Action](classes/action.md)<`T`>

___
<a id="reducertype"></a>

###  reducerType

**ΤreducerType**: *`function`*

*Defined in [src/create-reducer.ts:7](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ngrx-helpers/src/create-reducer.ts#L7)*

#### Type declaration
▸(state: *`T`*, action?: *[Action](classes/action.md)*): `T`

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `T` |
| `Optional` action | [Action](classes/action.md) |

**Returns:** `T`

___

## Functions

<a id="createreducer"></a>

### `<Const>` createReducer

▸ **createReducer**T,U(handlers: *[Handlers](interfaces/handlers.md)*, initialState: *`T`*): `(Anonymous function)`

*Defined in [src/create-reducer.ts:8](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ngrx-helpers/src/create-reducer.ts#L8)*

**Type parameters:**

#### T 
#### U :  `Action`
**Parameters:**

| Param | Type |
| ------ | ------ |
| handlers | [Handlers](interfaces/handlers.md) |
| initialState | `T` |

**Returns:** `(Anonymous function)`

___

