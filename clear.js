var shell = new ActiveXObject("Shell.Application");
var recycler = shell.Namespace(10);
var items = recycler.Items();
for (var i = 0; i < items.Count; i++) {
    items.Item(i).InvokeVerb("delete");
}