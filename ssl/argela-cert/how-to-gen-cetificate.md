= How-to Generate new certificates using OpenSSL

First install openssl from following location;

 - https://www.openssl.org/source/
 - http://gnuwin32.sourceforge.net/packages/openssl.htm
 
## Step #1 - Generate a CSR with OpenSSL
 
 source : [Generate a CSR with OpenSSL](https://support.rackspace.com/how-to/generate-a-csr-with-openssl/) 
 
### Create a CSR and Private Key

```
openssl req -config csr.config -new -out certificate.csr
```

### Verify your CSR

```
openssl req -noout -text -in certificate.csr
```

### Sign CSR usign CA certificate

````
openssl x509 -sha256 -req -in certificate.csr -out certificate.pem -CA ../Argela-CA2.pem -CAkey Argela-CA2.key.pem -CAcreateserial -days 1095
````

## Bonus

### Generate the RSA Private key
 
```
mkdir domain.com.ssl
cd domain.com.ssl
openssl genrsa -out private_key.pem 2048
```

### Convert Argle Cer file to Pem file

````
openssl x509 -inform der -in argela-CA2.cer -out argela-CA2.pem
````

### Convert a PEM certificate file and a private key to PKCS#12 (.pfx .p12)

````    
openssl pkcs12 -export -out certificate.pfx -inkey private_key.pem -in certificate.pem -certfile ../argela-CA2.cer
````

## Ref

- https://www.sslshopper.com/article-most-common-openssl-commands.html
- https://support.rackspace.com/how-to/generate-a-csr-with-openssl/