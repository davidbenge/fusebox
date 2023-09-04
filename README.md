# fusebox

Welcome to my Adobe I/O Application!

## Setup

- Populate the `.env` file in the project root and fill it as shown [below](#env)

## get-auth
Gets an auth token for the given data passed

Trick: private_key can be a base64 encoded private key BUT you need to encode it correctly.  In many private key gens you will see the line return and new line.  You need to remove them.  Start a Vs code new text file.  Paste in the private key and everywhere there is a \r\n hit return.  Take the results to https://www.base64encode.org/ or something like that and encode with destination char set UTF-8 and Destination newline separator as LF.  Take the resulting sting and put it in as the value being passed to the service.  

*call parameters*
```json 
{
    "client_id":"cm-p113111-e1111111-integration-1",
    "technical_account_id":"CCD8888464F276020A495FA7@techacct.adobe.com",
    "org_id":"33C1401053CF76370A123ABC@AdobeOrg",
    "client_secret":"p8e-yCY31pg42PSizKoV20g21WDxfNnnnn-X",
    "private_key":"LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBMnBzSXJkNWR4U2MvZlBrNDI0Y05mekZGeVgrbUdPTjdkb29Ma3M3WVY2TFM1YmxFClYzTmFad3hnSnJTNEs1WjkxbHFBaDFuSFQwNFUyeTZXN3BMbjRac2s3YmN3djQzWUVTZENFdjVhTk1rY2M4NFAKOVlrZEptWkxOeWxTR1lmSlZib1Y4K0VGTTZKVHp5ZVFsajFaUWZSMEZoL3AyQUhodk01MjN5cHp0SlArYjhVTwp5MjBYQTZ3bnd4eDVXdlFHZU4yK25tZzRKdzVRaHRkMC9YbDNna2ZTTENWanB5bzJQM253V2JhMVdmd2lTQ2FBCk9wVm5ib2hDV05qb1ZjcTRtV2VVRUVaazJ1eWcyT3FJT2RzKzd6djFWMUpPOXR6UnRYOHpoNyt2dnF4NWd5SWEKTlQ4dURNN3RuSmVqSVBvMXJ3UzlSMjJ1YmpKbkJyVXBLU291b1FJREFRQUJBb0lCQUQvc2JkRko0T214M0dMVApEY2xENkxKMDJnOWVBRmZ1elQrUWhtbmJpbSsxOFMyenkwUTNPd3cvRmk2N1VjK05KaWIwTi9sY1MyZnBVVGYyCm03UVB5VGF6ZzB6djhKVlRDUWViRHpzMm5YSXFET1BnTWRKKzBjTlV6bEhIQjNibnVmd1RlaS9pY1A3MFRNV2EKc0REK3A0Y2QwSVJYdUsydGZ6RVN2cmZyVmdKTGFmRUorKzJoLytHbllFT05xWE1LK3pWL2huZUPVTRrZmlXeGhaCnZMWUNlV0p2d0VkWUZLb0l4Zys0ckQrNGpNb2xzTVpJSitMSkhhc0NnWUJMMVhVcGYwNml1cmp4VFpsTWV5ZmcKZXpXTVlGZkVWaTRnWjd4NCsydGVJclhDeTRCRUNMNnliM3ZnRUF2WVJ1VVlVOWpIT1c0QXhpUGFvT3VWSlFFNApPOGNqLzJ1M1hzS0RJc21EK2x6QmZORU1LRnErU29KN1lodWhCSUl2UEdEVmlQd2dFb0RoekkvazJEN2ZIRWt6CkdKcXFWb2kzMmZLK29hM2c2NDJkL3dLQmdRRGhjNDBHVFZMWDMzYUQ1L0lFaHptTGNLV3FZMURISXZrT2JwWnEKc2EwNTlpNi9OOTFyUEFiMTFqbTV3ZVNhK3RpSGt5YWgrblJoMmQyKzNlYWpvQWM5dWw2d0d2bDJ2Yk1HU3lPOQptMVl5c1F3UjAwMEdPcXNJQ09zc3JLTmJlQjZvZzRHSUFWNDZPQVFERWFFdENkZ3gxNTlvY3luTmlnMUhWcERBCjVRMXlmUUtCZ0NKVEZkdUVQdXIxOENOY29lamhoaFRXd2JqYS80Y012RHhBeE1KbEJSZERLeld2ZGVhMGpxdGsKbWFsUXByeExwd0g2eTJ5K1pvbXVQUVMydUd5dTVYNnhvUlh1YnNVOGdZVmVLbUFMUWlFN3NySGdubVVYelVjagphdUZnSVhFcWszMWxJNXBUMVJabEJ0ZEVoVWhyNjl3ZHM5SVZWNy9GUVZHOUtNZHB3cEJ0Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t",
    "meta_scopes":"ent_aem_cloud_api",
    "private_key_base64":true
}
```


## Test & Coverage

- Run `aio app test` to run unit tests for ui and actions
- Run `aio app test --e2e` to run e2e tests

## Deploy & Cleanup

- `aio app deploy` to build and deploy all actions on Runtime and static files to CDN
- `aio app undeploy` to undeploy the app

## Config

### `.env`

You can generate this file using the command `aio app use`. 

```bash
# This file must **not** be committed to source control

## please provide your Adobe I/O Runtime credentials
# AIO_RUNTIME_AUTH=
# AIO_RUNTIME_NAMESPACE=
```

### `app.config.yaml`

- Main configuration file that defines an application's implementation. 
- More information on this file, application configuration, and extension configuration 
  can be found [here](https://developer.adobe.com/app-builder/docs/guides/appbuilder-configuration/#appconfigyaml)

#### Action Dependencies

- You have two options to resolve your actions' dependencies:

  1. **Packaged action file**: Add your action's dependencies to the root
   `package.json` and install them using `npm install`. Then set the `function`
   field in `app.config.yaml` to point to the **entry file** of your action
   folder. We will use `webpack` to package your code and dependencies into a
   single minified js file. The action will then be deployed as a single file.
   Use this method if you want to reduce the size of your actions.

  2. **Zipped action folder**: In the folder containing the action code add a
     `package.json` with the action's dependencies. Then set the `function`
     field in `app.config.yaml` to point to the **folder** of that action. We will
     install the required dependencies within that directory and zip the folder
     before deploying it as a zipped action. Use this method if you want to keep
     your action's dependencies separated.

## Debugging in VS Code

While running your local server (`aio app run`), both UI and actions can be debugged, to do so open the vscode debugger
and select the debugging configuration called `WebAndActions`.
Alternatively, there are also debug configs for only UI and each separate action.

## Typescript support for UI

To use typescript use `.tsx` extension for react components and add a `tsconfig.json` 
and make sure you have the below config added
```
 {
  "compilerOptions": {
      "jsx": "react"
    }
  } 
```
