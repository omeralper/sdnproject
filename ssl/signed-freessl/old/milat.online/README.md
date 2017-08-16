# Domain Certificate Details

This folder contains files for requesting SSL certificate.

## Domains
Certificate contains following domains(multi-site certificate); 
- milat.online
- nac.milat.online
- ayb.milat.online
- ctrl.milat.online
- c1.milat.online
- c2.milat.online
- c3.milat.online
- c4.milat.online
- c5.milat.online
- c6.milat.online
- c7.milat.online
- c8.milat.online
- c9.milat.online
- c10.milat.online

## How-to generate

To generate new certificate use instructions in "HOW-TO.md" file at the root of "ssl" folder.

## How-to-convert to .pfx

Run the following command on console (openssl must be installed on the system)

````cmd
openssl pkcs12 -export -in domain-cert.pem -inkey domain-key.pem -out domain.pfx -password pass:milat.online
````

## Files

Definition of the files in this folder are;

- README.md               : This files.
- domain-csr.pem          : Domain Singing Request(CSR) file. This file is used for requesting new certificate.
- domain-key.pem          : Domain Certificate's Private Key.
- domain-cert.pem         : Domain Certificate.
- domain-verification.md  : DNS TXT verification info.
