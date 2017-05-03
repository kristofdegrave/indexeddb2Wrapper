# indexeddb2Wrapper
[![Build Status](https://travis-ci.org/kristofdegrave/indexeddb2Wrapper.svg?branch=master)](https://travis-ci.org/kristofdegrave/indexeddb2Wrapper)

A wrapper around the indexeddb API 2 specs. 

It also provides some shims for IE and Edge which don't support `onversionchange` on the `IDBDatabase` and `objectStoreNames` on the `IDBTransaction`
Beside the shims a promise is added for all the interfaces.