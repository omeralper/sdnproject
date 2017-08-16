
# How to update Express(nodejs) for SSL Certificates

All SSL certificate files are stored under "swagger-api/ssl" folder. This folder contains multiple sub-folders which contain different certificated for different domains.

SSL certificate selection is controlled by the config file located at "swagger-api/config/config.json"

This file contains following lines;

```
{
.
..
...

  "ssl": {
    "enabled": true,
    "port": 443,
...
    "key": "ssl/signed-freessl/milat.merged/domain-key.pem", <-- this is the current active SSL key file reference
    "cert": "ssl/signed-freessl/milat.merged/domain-cert.pem" <-- this is the current active SSL certificate file reference
  },

...
..
.
}

```

"key" and "cert" fields contains file reference to SSL definition files. When you modify these fields you change the SSL config of the frontend server.

So, there are 2 ways of updating SSL certificated

## Method #1: Update certificate files of the current SSL config

Locate the files specified in "key" and "cert" config parameters and overwrite the new certificate files over the previous ones.

## Method #2: Update config value to file references in another folder
Create a new sub-folder under "ssl" folder and copy new certificate files there, and update the "config.json" file to reference to new certificate files.

## Last Step: Restart the nodejs server
(!) **In either case, nodejs server must be restarted**

### Certificate files
In order to update SSL certificates, following files are needed;

- **domain-cert.pem:** This file contains SSL certificate definition
- **domain-key.pem:** This file contains SSL certificate private key definition. This file is very important and must be securely stored.

(!) **PLEASE DO NOT KEEP MULTIPLE COPIES OF PRIVATE-KEY FILE, DESTROY ALL OTHER COPIES IMMEDIATELY**