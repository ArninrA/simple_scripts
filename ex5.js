var wshShell = new ActiveXObject("WScript.Shell");
var value = wshShell.RegRead("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders\\Desktop");
WScript.Echo(value);