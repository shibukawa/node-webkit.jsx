node-webkit.jsx
===========================================

Synopsis
---------------

node-webkit API wrapper for JSX

Code Example
---------------

This module implements APIs described at [node-webkit Native UI API Manual](https://github.com/rogerwang/node-webkit/wiki/Native-UI-API-Manual).

```js
import "node-webkit.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        var menu = new nw.gui.Menu();

        // Add some items
        menu.append(new nw.gui.MenuItem({ label: 'Item A' }));
        menu.append(new nw.gui.MenuItem({ label: 'Item B' }));
        menu.append(new nw.gui.MenuItem({ type: 'separator' }));
        menu.append(new nw.gui.MenuItem({ label: 'Item C' }));

        // Remove one item
        menu.removeAt(1);

        // Popup as context menu
        menu.popup(10, 10);
    }
}
```

Installation
---------------

```sh
$ npm install node-webkit.jsx --save-dev
```

API Reference
------------------

See [node-webkit Native UI API Manual](https://github.com/rogerwang/node-webkit/wiki/Native-UI-API-Manual).

Development
-------------

## Repository

* Repository: git://github.com/shibukawa/node-webkit.jsx.git
* Issues: https://github.com/shibukawa/node-webkit.jsx/issues

## Run Test

```sh
$ grunt test
```

## Build Sample

```sh
$ grunt build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

BSD-2-Clause

Complete license is written in `LICENSE.md`.
