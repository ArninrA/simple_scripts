var wshShell = new ActiveXObject("WScript.Shell");
wshShell.RegWrite("HKCU\\Software\\MyTestKey\\MyParam", "Value", "REG_SZ");
wshShell.Run("regedit.exe", 3, false);