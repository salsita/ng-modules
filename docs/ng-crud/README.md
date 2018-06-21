
#  ng-crud

## Index

### Classes

* [CrudModule](classes/crudmodule.md)
* [CrudResolver](classes/crudresolver.md)
* [CrudSelectors](classes/crudselectors.md)
* [CrudService](classes/crudservice.md)

### Interfaces

* [CrudModuleConfig](interfaces/crudmoduleconfig.md)
* [CrudRouteData](interfaces/crudroutedata.md)
* [CrudState](interfaces/crudstate.md)
* [CrudStateRoot](interfaces/crudstateroot.md)
* [EntitiesFetchedPayload](interfaces/entitiesfetchedpayload.md)

### Variables

* [CRUD_STORE_NAMESPACE](#crud_store_namespace)
* [crudReducer](#crudreducer)

### Object literals

* [crudActionCreators](#crudactioncreators)
* [crudActionTypes](#crudactiontypes)

---

## Variables

<a id="crud_store_namespace"></a>

### `<Const>` CRUD_STORE_NAMESPACE

**● CRUD_STORE_NAMESPACE**: *`InjectionToken`<`Object`>* =  new InjectionToken('Crud store namespace')

*Defined in [src/crud.tokens.ts:3](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.tokens.ts#L3)*

___
<a id="crudreducer"></a>

### `<Const>` crudReducer

**● crudReducer**: *`reducerType`<[CrudState](interfaces/crudstate.md)>* =  createReducer(
  {
    [crudActionTypes.ENTITIES_FETCHED]: entitiesFetched
  },
  crudInitialState
)

*Defined in [src/crud.reducer.ts:18](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.reducer.ts#L18)*

___

## Object literals

<a id="crudactioncreators"></a>

### `<Const>` crudActionCreators

**crudActionCreators**: *`object`*

*Defined in [src/crud.actions.ts:12](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.actions.ts#L12)*

<a id="crudactioncreators.entitiesfetched"></a>

####  entitiesFetched

**● entitiesFetched**: *`function`*

*Defined in [src/crud.actions.ts:13](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.actions.ts#L13)*

#### Type declaration
▸(payload?: *[T]()*): `Action`<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` payload | [T]() |

**Returns:** `Action`<`T`>

___

___
<a id="crudactiontypes"></a>

### `<Const>` crudActionTypes

**crudActionTypes**: *`object`*

*Defined in [src/crud.actions.ts:4](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.actions.ts#L4)*

<a id="crudactiontypes.entities_fetched"></a>

####  ENTITIES_FETCHED

**● ENTITIES_FETCHED**: *`string`* = "crud/entities-fetched"

*Defined in [src/crud.actions.ts:5](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-crud/src/crud.actions.ts#L5)*

___

___

