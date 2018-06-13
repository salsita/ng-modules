
#  ng-api

## Index

### Classes

* [APIInterceptor](classes/apiinterceptor.md)
* [ApiError](classes/apierror.md)
* [ApiModule](classes/apimodule.md)
* [ApiSelectors](classes/apiselectors.md)
* [ApiService](classes/apiservice.md)
* [BusinessValidationError](classes/businessvalidationerror.md)

### Interfaces

* [ApiErrorPayload](interfaces/apierrorpayload.md)
* [ApiModuleConfig](interfaces/apimoduleconfig.md)
* [ApiState](interfaces/apistate.md)
* [ApiStateRoot](interfaces/apistateroot.md)

### Variables

* [API_BASE_URL](#api_base_url)
* [API_STORE_NAMESPACE](#api_store_namespace)
* [API_VALIDATION_ERROR](#api_validation_error)
* [HTTP_CONFLICT](#http_conflict)
* [NETWORK_ERROR](#network_error)
* [UNKNOWN_API_ERROR](#unknown_api_error)
* [apiReducer](#apireducer)

### Functions

* [apiCall](#apicall)
* [withLoadingIndicator](#withloadingindicator)

### Object literals

* [apiActionCreators](#apiactioncreators)
* [apiActionTypes](#apiactiontypes)

---

## Variables

<a id="api_base_url"></a>

### `<Const>` API_BASE_URL

**● API_BASE_URL**: *`InjectionToken`<`string`>* =  new InjectionToken<string>('API baseURL')

*Defined in [src/api.interceptor.ts:11](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.interceptor.ts#L11)*

___
<a id="api_store_namespace"></a>

### `<Const>` API_STORE_NAMESPACE

**● API_STORE_NAMESPACE**: *`InjectionToken`<`Object`>* =  new InjectionToken('API store namespace')

*Defined in [src/api.tokens.ts:3](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.tokens.ts#L3)*

___
<a id="api_validation_error"></a>

### `<Const>` API_VALIDATION_ERROR

**● API_VALIDATION_ERROR**: *"validationError"* = "validationError"

*Defined in [src/api.errors.ts:3](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.errors.ts#L3)*

___
<a id="http_conflict"></a>

### `<Const>` HTTP_CONFLICT

**● HTTP_CONFLICT**: *`409`* = 409

*Defined in [src/api.status-codes.ts:1](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.status-codes.ts#L1)*

___
<a id="network_error"></a>

### `<Const>` NETWORK_ERROR

**● NETWORK_ERROR**: *"networkError"* = "networkError"

*Defined in [src/api.errors.ts:1](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.errors.ts#L1)*

___
<a id="unknown_api_error"></a>

### `<Const>` UNKNOWN_API_ERROR

**● UNKNOWN_API_ERROR**: *"unknownError"* = "unknownError"

*Defined in [src/api.errors.ts:2](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.errors.ts#L2)*

___
<a id="apireducer"></a>

### `<Const>` apiReducer

**● apiReducer**: *`reducerType`<[ApiState](interfaces/apistate.md)>* =  createReducer(
  {
    [apiActionTypes.API_ERROR]: apiError,
    [apiActionTypes.START_LOADING]: startLoading,
    [apiActionTypes.STOP_LOADING]: stopLoading
  },
  apiInitialState
)

*Defined in [src/api.reducer.ts:26](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.reducer.ts#L26)*

___

## Functions

<a id="apicall"></a>

### `<Const>` apiCall

▸ **apiCall**T(): `(Anonymous function)`

*Defined in [src/api.decorators.ts:7](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.decorators.ts#L7)*

**Type parameters:**

#### T 

**Returns:** `(Anonymous function)`

___
<a id="withloadingindicator"></a>

### `<Const>` withLoadingIndicator

▸ **withLoadingIndicator**T(): `(Anonymous function)`

*Defined in [src/api.decorators.ts:36](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.decorators.ts#L36)*

**Type parameters:**

#### T 

**Returns:** `(Anonymous function)`

___

## Object literals

<a id="apiactioncreators"></a>

### `<Const>` apiActionCreators

**apiActionCreators**: *`object`*

*Defined in [src/api.actions.ts:21](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.actions.ts#L21)*

<a id="apiactioncreators.apierror"></a>

####  apiError

**● apiError**: *`function`*

*Defined in [src/api.actions.ts:22](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.actions.ts#L22)*

#### Type declaration
▸(payload?: *[T]()*): `Action`<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` payload | [T]() |

**Returns:** `Action`<`T`>

___
<a id="apiactioncreators.startloading"></a>

####  startLoading

**● startLoading**: *`function`*

*Defined in [src/api.actions.ts:23](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.actions.ts#L23)*

#### Type declaration
▸(payload?: *[T]()*): `Action`<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` payload | [T]() |

**Returns:** `Action`<`T`>

___
<a id="apiactioncreators.stoploading"></a>

####  stopLoading

**● stopLoading**: *`function`*

*Defined in [src/api.actions.ts:24](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.actions.ts#L24)*

#### Type declaration
▸(payload?: *[T]()*): `Action`<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` payload | [T]() |

**Returns:** `Action`<`T`>

___

___
<a id="apiactiontypes"></a>

### `<Const>` apiActionTypes

**apiActionTypes**: *`object`*

*Defined in [src/api.actions.ts:4](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.actions.ts#L4)*

<a id="apiactiontypes.api_error"></a>

####  API_ERROR

**● API_ERROR**: *`string`* = "api/error"

*Defined in [src/api.actions.ts:5](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.actions.ts#L5)*

___
<a id="apiactiontypes.start_loading"></a>

####  START_LOADING

**● START_LOADING**: *`string`* = "api/start-loading"

*Defined in [src/api.actions.ts:6](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.actions.ts#L6)*

___
<a id="apiactiontypes.stop_loading"></a>

####  STOP_LOADING

**● STOP_LOADING**: *`string`* = "api/stop-loading"

*Defined in [src/api.actions.ts:7](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.actions.ts#L7)*

___

___

