var word = new ActiveXObject("Word.Application");
var doc = word.Documents.Add();
doc.SaveAs("C:\\temp\\doc1.docx");
word.Quit();