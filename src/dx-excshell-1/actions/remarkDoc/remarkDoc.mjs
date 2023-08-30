import { unified } from "unified";
import markdown from "remark-parse";
import remarkBreaks from "remark-breaks";
import docx from "remark-docx";
import pdf from "remark-pdf/node";
import unifiedPrettier from 'unified-prettier';

export default async function(params){
    /*
    if(docType === 'docx'){
        return await remarkDocx(params.markdownSource, params.docName);
    }else{
        return await remarkPdf(params.markdownSource, params.docName);
    }*/
    return {
        statusCode: 200,
         body: "boo"
    };
}

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