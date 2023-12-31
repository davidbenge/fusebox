/*
* <license header>
*/

/**
 * This is a sample action showcasing how to access an external API
 *
 * Note:
 * You might want to disable authentication and authorization checks against Adobe Identity Management System for a generic action. In that case:
 *   - Remove the require-adobe-auth annotation for this action in the manifest.yml of your application
 *   - Remove the Authorization header from the array passed in checkMissingRequestInputs
 *   - The two steps above imply that every client knowing the URL to this deployed action will be able to invoke it without any authentication and authorization checks against Adobe Identity Management System
 *   - Make sure to validate these changes against your security requirements before deploying the action
 */

const fetch = require('node-fetch')
const { Core } = require('@adobe/aio-sdk')
//const remarkDoc = require('../common/remarkDoc.mjs')
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')

// main function that will be executed by Adobe I/O Runtime
async function main (params) {
  const base64RegExp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/
  //const remarkDoc = await import('../common/remarkDoc.mjs')
  let remarkDoc = (await import('../remarkDoc/remarkDoc.mjs')).default
  //console.log(JSON.stringify(remarkDoc))

  // create a Logger
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  try {
    // 'info' is the default level if not set
    logger.info('Calling the main action for md ro pdf')

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

    /*
    const text = `# A first-level heading
  
    ## A second-level heading  
  
    ### A third-level heading  

    #### A forth-level heading
    `;
    */

    //input validation is base64
    if(base64RegExp.test(params.markdownSource)){
      params.markdownSource = Buffer.from(params.markdownSource, 'base64').toString('utf8')
    }

    params.docType = 'pdf'
    //logger.info('Calling remarkDoc')
    let resultBuffer
    try{
      resultBuffer = await remarkDoc(params.markdownSource, params.docName, params.docType)
      //logger.info('Calling remarkDoc complete')
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

    return response
  } catch (error) {
    // log any server errors
    logger.error(error)
    // return with 500
    return errorResponse(500, 'server error', logger)
  }
}

exports.main = main
