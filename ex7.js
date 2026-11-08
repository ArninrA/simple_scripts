var fso = new ActiveXObject("Scripting.FileSystemObject");
try { WScript.Echo(fso.OpenTextFile("C:\\Config.sys", 1).ReadAll()); } catch (e) { WScript.Echo("Config.sys не найден"); }
try { WScript.Echo(fso.OpenTextFile("C:\\Autoexec.bat", 1).ReadAll()); } catch (e) { WScript.Echo("Autoexec.bat не найден"); }