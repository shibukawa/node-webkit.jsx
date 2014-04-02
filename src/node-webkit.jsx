/**
 * node-webkit API wrapper for JSX
 *
 * @author shibukawa
 *
 * @see https://github.com/shibukawa/node-webkit.jsx
 *
 * License: BSD-2-Clause
 */

import "js/web.jsx" into web;
import "js/nodejs.jsx";

native __fake__ class _Cookie
{
    /// The name of the cookie.
    var name : string;
    /// The value of the cookie.
    var value : string;
    /// The domain of the cookie (e.g. "www.google.com", "example.com").
    var domain : string;
    /// True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie).
    var hostOnly : boolean;
    /// The path of the cookie.
    var path : string;
    /// True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS).
    var secure : boolean;
    /// True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts).
    var httpOnly : boolean;
    /// True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date.
    var session : boolean;
    /// The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.
    var expirationDate : Nullable.<number>;
    var storeId : string;
}

native __fake__ class _Cookies extends EventEmitter
{
    function get(details : Map.<string>, callback : (_Cookie) -> void) : void;
    function getAll(details : Map.<variant>, callback : (_Cookie[]) -> void) : void;
    function get(details : Map.<variant>, callback : (_Cookie) -> void) : void;
    function remove(details : Map.<string>, callback : (Map.<string>) -> void) : void;
}

native class nw
{
    class gui
    {
        class Window extends EventEmitter
        {
            static function get() : nw.gui.Window;
            static function get(window : web.Window) : nw.gui.Window;
            static function open(url : string) : nw.gui.Window;
            static function open(url : string, option : Map.<variant>) : nw.gui.Window;
            var window : web.Window;
            var width : int;
            var height : int;
            var title : string;
            var menu : nw.gui.Menu;
            var isFullscreen : boolean;
            var isKioskMode : boolean;
            var zoomLevel : number;
            var cookies : _Cookies;
            function moveTo(x : int, y : int) : void;
            function moveBy(x : int, y : int) : void;
            function resizeTo(x : int, y : int) : void;
            function resizeBy(x : int, y : int) : void;
            function focus() : void;
            function blur() : void;
            function show() : void;
            function hide() : void;
            function close() : void;
            function close(force : boolean) : void;
            function reload() : void;
            function reloadIgnoringCache() : void;
            function maximize() : void;
            function unmaximize() : void;
            function minimize() : void;
            function restore() : void;
            function enterFullscreen() : void;
            function leaveFullscreen() : void;
            function toggleFullscreen() : void;
            function enterKioskMode() : void;
            function leaveKioskMode() : void;
            function toggleKioskMode() : void;
            function showDevTools(id : string) : void;
            function showDevTools(iframe : web.HTMLIFrameElement, headless : boolean) : void;
            function closeDevTools() : void;
            function isDevToolsOpen() : boolean;
            function setMaximumSize(width : int, height : int) : void;
            function setMinimumSize(width : int, height : int) : void;
            function setResizable(resizable : boolean) : void;
            function setAlwaysOnTop(top : boolean) : void;
            function setPosition(position : string) : void;
            function setShowInTaskbar(show : boolean) : void;
            function requestAttention(attention : boolean) : void;
            function capturePage(callback : (string) -> void) : void;
            function capturePage(callback : (string) -> void, image_format : string) : void;
            function capturePage(callback : (string) -> void, config : Map.<string>) : void;
            function capturePage(callback : (Buffer) -> void, config : Map.<string>) : void;

        }

        class Menu
        {
            var items : nw.gui.MenuItem[];
            function constructor();
            function constructor(option : Map.<string>);
            function append(child : nw.gui.MenuItem) : void;
            function insert(child : nw.gui.MenuItem, i : int) : void;
            function remove(child : nw.gui.MenuItem) : void;
            function removeAt(i : int) : void;
            function popup(x : int, y : int) : void;
        }

        class MenuItem
        {
            var type : string; // 'separator' or 'checkbox' or 'normal'
            var label : string;
            var icon : string;
            var tooltip : string;
            var checked : boolean;
            var enabled : boolean;
            var submenu : nw.gui.MenuItem;
            var click : () -> void;
            function constructor(option : Map.<variant>);
        }

        class App extends EventEmitter
        {
            static var argv : string[];
            static var fullArgv : string[];
            static var dataPath : string;
            static var manifest : Map.<variant>;
            static function clearCache() : void;
            static function closeAllWindows() : void;
            static function crashBrowser() : void;
            static function crashRenderer() : void;
            static function getProxyForURL(url : string) : void;
            static function quit() : void;
            static function setCrashDumpDir(dir : string) : void;
        }

        class Clipboard {
            static function get() : nw.gui.Clipboard;
            function set(data : string, mimetype : string) : string;
            function get(key : string) : string;
            function clear() : void;
        }

        class Tray extends EventEmitter {
            var menu : nw.gui.Menu;
            var title : string;
            var icon : string;
            var alticon : string;
            var tooltip : string;
            function constructor(option : Map.<string>);
            function remove() : void;
        }

        class Shell {
            static function openExternal(URI : string) : void;
            static function openItem(file_path : string) : void;
            static function showItemInFolder(file_path : string) : void;
        }
    }
} = '''
{
    gui: require('nw.gui')
}
''';
