var wmi = GetObject("winmgmts:\\\\.\\root\\cimv2");
var disk = wmi.ExecQuery("SELECT * FROM Win32_LogicalDisk WHERE DeviceID='C:'");
for (var e = new Enumerator(disk); !e.atEnd(); e.moveNext()) {
    var d = e.item();
    WScript.Echo("Диск C: Всего: " + d.Size + " Байт. Свободно: " + d.FreeSpace + " Байт.");
}
var fso = new ActiveXObject("Scripting.FileSystemObject");
WScript.Echo("Дата создания C:\\temp: " + fso.GetFolder("C:\\temp").DateCreated);