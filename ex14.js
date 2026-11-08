var fso = new ActiveXObject("Scripting.FileSystemObject");
fso.CreateTextFile("C:\\temp\\orig.txt", true).Close();
fso.CopyFile("C:\\temp\\orig.txt", "C:\\temp\\copy.txt");
fso.DeleteFile("C:\\temp\\orig.txt");