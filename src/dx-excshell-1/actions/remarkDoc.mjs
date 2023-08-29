import { unified } from "unified";
import markdown from "remark-parse";
import remarkBreaks from "remark-breaks";
import docx from "remark-docx";
import pdf from "remark-pdf/node";
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import unifiedPrettier from 'unified-prettier';

const remarkDoc = async (markdownSource, docName, docType) => {
    if(docType === 'docx'){
        return await remarkDocx(markdownSource, docName);
    }else{
        return await remarkPdf(markdownSource, docName);
    }
}

async function remarkDocx(markdownSource, docName) {
    const processor = unified(unifiedPrettier).use(markdown).use(remarkBreaks).use(docx, { output: "buffer" });
    
    const doc = await processor.process(markdownSource);
    const buffer = await doc.result;
    return buffer
}

async function remarkPdf(markdownSource, docName) {
    const processor = unified(unifiedPrettier).use(markdown).use(remarkBreaks).use(pdf, { output: "buffer" });
    
    const doc = await processor.process(markdownSource);
    const buffer = await doc.result;
    return buffer
}

export default remarkDoc;
  