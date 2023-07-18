Enhanced MySQL Pool [![Build Status](https://travis-ci.org/ireulguo/enhanced-mysql-pool.png?branch=master)](https://travis-ci.org/ireulguo/enhanced-mysql-pool)
===================
### IREUL Guo <ireul.guo@gmail.com>

Enhanced MySQL Connection Pool for Node.js

## Required Module

*   mysql
*   winston

## Usage

    emysql=require 'emysql'

### Initialization

Copy the `config.sample.json` to the place where you think is reasonable, correct the params, rename it at will.  

then:  

    emysql.init('/path/to/the/config.json')


NOTICE: the path send to `emysql.init` is for the function `require`, once the emysql module failed too much, it will entered failsafe module, emysql will automatically reload config file. It's suggested to use a `absolute path`.   
WARN: init once, use everywhere

### Fetch a Avaliable Connection

after init, get a avaliable connection is quite simple


    conn=emysql()

    conn=emysql.conn

NOTICE: emysql has a automatic balance system, each time you call the `emysql()`, or get the property `emysql.conn`, it will assign you a different connection


### Shutdown

once the MySQL pool is no longer needed, you can shut it down.

    emysql.close()

### The Logger

emysql use the default `winston` logger, if you want use your own `winston` logger instance, use `emysql.setLogger(logger)`
