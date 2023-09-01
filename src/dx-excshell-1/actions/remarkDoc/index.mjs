let unified;
//import { unified } from "unified";
let markdown;
//import markdown from "remark-parse";
let remarkBreaks;
//import remarkBreaks from "remark-breaks";
let docx;
//import docx from "remark-docx";
let pdf;
//import pdf from "remark-pdf/node";
let unifiedPrettier;
//import unifiedPrettier from 'unified-prettier';

//export default async function(params){
    //unified = (await import('unified')).default;
    //markdown = (await import('remark-parse')).default;
    //remarkBreaks = (await import('remark-breaks')).default;
    //docx = (await import('remark-docx')).default;
    //pdf = (await import('remark-pdf/node')).default;
    //unifiedPrettier = (await import('unified-prettier')).default;
    /*
    if(docType === 'docx'){
        return await remarkDocx(params.markdownSource, params.docName);
    }else{
        return await remarkPdf(params.markdownSource, params.docName);
    }*/
    //return {
    //    statusCode: 200,
   //     body: "boo"
   // };
//}

function remarkDoc(params) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        LOG_LEVEL: params.LOG_LEVEL,
        message: 'this is a test message'
      }
    }
}
  
/*
async function remarkDocx(markdownSource, docName) {
    const processor = unified(unifiedPrettier).use(markdown).use(remarkBreaks).use(docx, { output: "buffer" });
    
    const doc = await processor.process(markdownSource);
    const buffer = await doc.result;
    return {
        statusCode: 200,
         body: buffer
    };
}

async function remarkPdf(markdownSource, docName) {
    const processor = unified(unifiedPrettier).use(markdown).use(remarkBreaks).use(pdf, { output: "buffer" });
    
    const doc = await processor.process(markdownSource);
    const buffer = await doc.result;
    return {
        statusCode: 200,
         body: buffer
    };
}
*/

exports.main = remarkDoc;