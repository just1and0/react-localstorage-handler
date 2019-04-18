
  

# react-localstorage-handler

  

  

[![Build Status](https://travis-ci.com/just1and0/React-localStorage-handler.svg?branch=master)](https://travis-ci.com/just1and0/React-localStorage-handler)

  

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/just1and0/React-localStorage-handler/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/just1and0/React-localStorage-handler/?branch=master)

  

[![Build Status](https://scrutinizer-ci.com/g/just1and0/React-localStorage-handler/badges/build.png?b=master)](https://scrutinizer-ci.com/g/just1and0/React-localStorage-handler/build-status/master)

  

  

  

  

  

This package helps handle localstorage data. get, set, delete item from local storage. It can even check if a key in localstorage.

  

  

  

### Installation

  

  

  

Add React-localStorage-handler to your project by executing


```sh

$ npm install react-localstorage-handler

or

$ yarn add react-localstorage-handler

```

  

  
  

> and that's it, you're good to go!

  

  
  
## Usage

  

  

  

##### To check if a key exists use the *checkStorage()*

```sh
//import the checkStorage into your project

import { checkStorage } from 'react-localstorage-handler';

//and then use like so

const status = checkStorage('token');

return status; //will return  true is value exsist and false  if it doesn't

```

 #

##### To Add key and value to LocalStorage *addStorage()*

```sh
//import the checkStorage into your project

import { addStorage } from 'react-localstorage-handler';

//and then use like so

 addStorage('token', '$39876756453');

 

```

  
 #

##### To Retrieve a value by the key from LocalStorage *getStorage()*

```sh
//import the checkStorage into your project

import { getStorage } from 'react-localstorage-handler';

//and then use like so

 getStorage('token');

 

```

  
 #

##### To Remove an item by key from LocalStorage *removeStorage()*

```sh
//import the checkStorage into your project

import { removeStorage } from 'react-localstorage-handler';

//and then use like so

 removeStorage('token');

 

```

  
 #

##### To Clear all LocalStorage *clearStorage()*

```sh
//import the checkStorage into your project

import { clearStorage } from 'react-localstorage-handler';

//and then use like so

 clearStorage();

 

```

  

  

## Props

  

  

  

#### all React-localStorage-handler

  

  

|Name| Use |
|--|--|
| checkStorage | check is a key is saved in local storage |
| addStorage | Add key and value to LocalStorage |
| getStorage | Retrieve a value by the key from LocalStorage|
| removeStorage |Remove an item by key from LocalStorage |
| clearStorage | Clear all LocalStorage for that domain |


  

  

## Contributing

  

  

Feel free to contribute, just send a pull request ;)

  

  

  

## Licensing

  

  

This project is licensed under MIT license.