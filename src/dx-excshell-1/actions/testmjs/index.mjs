// ////////////////////////////
// index.mjs - this is the EcmaScript Module that contains the functionality

export default function (params) {
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