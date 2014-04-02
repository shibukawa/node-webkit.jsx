import "console.jsx";
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
