
#  ng-entities

## Index

### Classes

* [EntityRepositoryModule](classes/entityrepositorymodule.md)
* [EntityRepositorySelectors](classes/entityrepositoryselectors.md)
* [EntityRepositoryService](classes/entityrepositoryservice.md)

### Interfaces

* [EntityRepositoryModuleConfig](interfaces/entityrepositorymoduleconfig.md)
* [EntityRepositoryState](interfaces/entityrepositorystate.md)
* [EntityRepositoryStateRoot](interfaces/entityrepositorystateroot.md)
* [SingleEntityRepository](interfaces/singleentityrepository.md)

### Variables

* [ENTITY_REPOSITORY_STORE_NAMESPACE](#entity_repository_store_namespace)
* [entityRepositoryReducer](#entityrepositoryreducer)

### Object literals

* [entityRepositoryActionCreators](#entityrepositoryactioncreators)
* [entityRepositoryActionTypes](#entityrepositoryactiontypes)

---

## Variables

<a id="entity_repository_store_namespace"></a>

### `<Const>` ENTITY_REPOSITORY_STORE_NAMESPACE

**● ENTITY_REPOSITORY_STORE_NAMESPACE**: *`InjectionToken`<`Object`>* =  new InjectionToken(
  'Entity Repository store namespace'
)

*Defined in [src/entity-repository.tokens.ts:3](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-entities/src/entity-repository.tokens.ts#L3)*

___
<a id="entityrepositoryreducer"></a>

### `<Const>` entityRepositoryReducer

**● entityRepositoryReducer**: *`reducerType`<[EntityRepositoryState](interfaces/entityrepositorystate.md)<`any`>>* =  createReducer(
  {
    [entityRepositoryActionTypes.REPOSITORY_HAS_CHANGED]: repositoryHasChanged
  },
  entityRepositoryInitialState
)

*Defined in [src/entity-repository.reducer.ts:24](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-entities/src/entity-repository.reducer.ts#L24)*

___

## Object literals

<a id="entityrepositoryactioncreators"></a>

### `<Const>` entityRepositoryActionCreators

**entityRepositoryActionCreators**: *`object`*

*Defined in [src/entity-repository.actions.ts:12](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-entities/src/entity-repository.actions.ts#L12)*

<a id="entityrepositoryactioncreators.repositoryhaschanged"></a>

####  repositoryHasChanged

**● repositoryHasChanged**: *`function`*

*Defined in [src/entity-repository.actions.ts:13](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-entities/src/entity-repository.actions.ts#L13)*

#### Type declaration
▸(payload?: *[T]()*): `Action`<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` payload | [T]() |

**Returns:** `Action`<`T`>

___

___
<a id="entityrepositoryactiontypes"></a>

### `<Const>` entityRepositoryActionTypes

**entityRepositoryActionTypes**: *`object`*

*Defined in [src/entity-repository.actions.ts:4](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-entities/src/entity-repository.actions.ts#L4)*

<a id="entityrepositoryactiontypes.repository_has_changed"></a>

####  REPOSITORY_HAS_CHANGED

**● REPOSITORY_HAS_CHANGED**: *`string`* = "entity-repository/changed"

*Defined in [src/entity-repository.actions.ts:5](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-entities/src/entity-repository.actions.ts#L5)*

___

___

