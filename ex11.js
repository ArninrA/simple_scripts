var wshShell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var desktop = wshShell.SpecialFolders("Desktop");

var wordLink = wshShell.CreateShortcut(fso.BuildPath(desktop, "Word.lnk"));
wordLink.TargetPath = "C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE";
wordLink.Save();

var excelLink = wshShell.CreateShortcut(fso.BuildPath(desktop, "Excel.lnk"));
excelLink.TargetPath = "C:\\Program Files\\Microsoft Office\\root\\Office16\\EXCEL.EXE";
excelLink.Save();