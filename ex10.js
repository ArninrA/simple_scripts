var word = new ActiveXObject("Word.Application");
var doc = word.Documents.Open("C:\\temp\\doc1.docx");
WScript.Echo("Слов: " + doc.Words.Count);
doc.Close();
word.Quit();