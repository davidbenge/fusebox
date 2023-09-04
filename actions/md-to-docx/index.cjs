const fetch = require('node-fetch')
const { Core } = require('@adobe/aio-sdk')
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')

async function reMarkDocMain(params) {
    const { default: esmMain } = await import('../remark.mjs')

    try {
        // create a Logger
        const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })
        const base64RegExp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/
        //const owBlocking = true
        //const remarkOwAction = "dx-excshell-1/remarkDoc"
        //const owResult = false
        logger.info(JSON.stringify(process.env))
        //const owOptions = {
        //  apihost: process.env['__OW_API_HOST'], 
        //  api_key: process.env['__OW_API_KEY'],
        //  api: process.env['__OW_API_HOST'] + "/api/v1/"
        //}
        //const ow = openwhisk(owOptions)
        //const remarkDoc = await import('../common/remarkDoc.mjs')
        //let remarkDoc = (await import('../remarkDoc.mjs')).default
        //console.log(JSON.stringify(remarkDoc))
    
        // 'info' is the default level if not set
        logger.info('Calling the main action on md to docx')
    
        // log parameters, only if params.LOG_LEVEL === 'debug'
        logger.debug(stringParameters(params))
    
        // check for missing request input parameters and headers
        const requiredParams = ['docName','markdownSource']
        const requiredHeaders = []
        const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
        if (errorMessage) {
          // return and log client errors
          return errorResponse(400, errorMessage, logger)
        }
    
        // extract the user Bearer token from the Authorization header
        //const token = getBearerToken(params)
    
        //input validation is base64
        if(base64RegExp.test(params.markdownSource)){
          params.markdownSource = Buffer.from(params.markdownSource, 'base64').toString('utf8')
        }
    
        params.docType = 'docx'
        //logger.info('Calling remarkDoc')
        let resultBuffer
        //const callParams = {markdownSource: params.markdownSource, docName: params.docName, docType: params.docType}
        try{
          //resultBuffer = await remarkDoc(params.markdownSource, params.docName, params.docType)
          //resultBuffer = await ow.actions.invoke({name: remarkOwAction, blocking: owBlocking, result: owResult, params: callParams})
          logger.info('Calling remarkDoc complete')
          //logger.info(resultBuffer)
        } catch (error) {
          // log any server errors
          logger.error(error)
          // return with 500
          return errorResponse(500, 'Document building error', logger)
        }
    
        /*
        const response = {
          "statusCode": 200,
          "body": {
            "docName":`${params.docName}.${params.docType}`,
            "docType":`${params.docType}`,
            "docBody":"base64_buffer"
            //'doc':resultBuffer.toString('base64')
          }
        }
        */
        const response = {
          statusCode: 200,
          body: {test:"test"}
        }
    
        //fs.writeFileSync(`example.${params.docType}`,resultBuffer)
    
        return esmMain(params)
      } catch (error) {
        // log any server errors
        logger.error(error)
        // return with 500
        return errorResponse(500, 'server error', logger)
      }
}
  
exports.main = reMarkDocMain