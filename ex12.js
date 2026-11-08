var wshShell = new ActiveXObject("WScript.Shell");
WScript.Echo("USERNAME: " + wshShell.ExpandEnvironmentStrings("%USERNAME%"));
WScript.Echo("TEMP: " + wshShell.ExpandEnvironmentStrings("%TEMP%"));
WScript.Echo("WINDIR: " + wshShell.ExpandEnvironmentStrings("%WINDIR%"));