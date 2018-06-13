[ng-api](../README.md) > [APIInterceptor](../classes/apiinterceptor.md)

# Class: APIInterceptor

## Hierarchy

**APIInterceptor**

## Implements

* `HttpInterceptor`

## Index

### Constructors

* [constructor](apiinterceptor.md#constructor)

### Methods

* [intercept](apiinterceptor.md#intercept)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new APIInterceptor**(baseUrl: *`string`*, store: *`Store`<`any`>*): [APIInterceptor](apiinterceptor.md)

*Defined in [src/api.interceptor.ts:14](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.interceptor.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| baseUrl | `string` |
| store | `Store`<`any`> |

**Returns:** [APIInterceptor](apiinterceptor.md)

___

## Methods

<a id="intercept"></a>

###  intercept

▸ **intercept**(req: *`HttpRequest`<`any`>*, next: *`HttpHandler`*): `Observable`<`HttpEvent`<`any`>>

*Defined in [src/api.interceptor.ts:17](https://github.com/salsita/ng-modules/blob/34a93e1/libs/ng-api/src/api.interceptor.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `HttpRequest`<`any`> |
| next | `HttpHandler` |

**Returns:** `Observable`<`HttpEvent`<`any`>>

___

