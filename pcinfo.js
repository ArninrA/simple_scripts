var wmi = GetObject("winmgmts:\\\\.\\root\\cimv2");
var os = new Enumerator(wmi.ExecQuery("SELECT Caption, Version FROM Win32_OperatingSystem")).item();
var ram = new Enumerator(wmi.ExecQuery("SELECT TotalPhysicalMemory FROM Win32_ComputerSystem")).item();

WScript.Echo("хЛЪ ой: " + wmi.ExecQuery("SELECT Name FROM Win32_ComputerSystem").ItemIndex(0).Name);
WScript.Echo("ня: " + os.Caption + " (" + os.Version + ")");
WScript.Echo("нгс: " + Math.round(ram.TotalPhysicalMemory / 1073741824) + " ца");