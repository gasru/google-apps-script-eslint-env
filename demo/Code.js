function getFuckingRange() 

{
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('shema');
  var range = sheet.getRange('B47:I64');
  var buff = range.getValues();
  return buff;
}

function tryToMakeDocFile()
{
  var buff = getFuckingRange();
  var doc = DocumentApp.openById('-j-Zp3Q6Lo');
  var body = doc.getBody();
  var tableVariantOne = [['hi']];
  var style = {};
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
  style[DocumentApp.Attribute.FONT_SIZE] = 12;
  style[DocumentApp.Attribute.BOLD] = true;

  for (var i in buff) if (i != 0) {
      if (buff[i][3] = [])
        var par = body
          .insertParagraph(i, i + '. ' + buff[i][1])
          .setHeading(DocumentApp.ParagraphHeading.HEADING1)
          .setAttributes(style);
      body.appendTable(tableVariantOne);
    }
}
