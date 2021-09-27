
Basic xlx exporter lib.

###

     npm i sheet

###

###

     import Sheet from 'mapjc';

     const sheet = new Sheet();
     
     sheet.addColumn('Col 1').addColumn('Col 2');
     or
     sheet.addColumn('Col 1').addColumn('<div>Col 2</div>');

     for(let rowIndex=0; rowIndex<5; rowIndex++){
          const row = new SheetRow();
          row.addCell(`Cel ${rowIndex}-1`).addCell(`Cel ${rowIndex}-2`);
          sheet.addRow(row);
     }

     const downloader = sheet.compile()
     if(downloader.download){
          downloader.download();
     }
###

**CHANGE LOG**
PUSH