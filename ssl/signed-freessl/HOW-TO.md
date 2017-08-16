# HOW TO GENERATE SIGN CERTIFICATE USING FREE-SSL SERVICE

Goto site: https://zerossl.com/free-ssl/#crt

## IMPORTANT
- Use "account-key.txt" file contents for user details
- Use "<domain-folder>domain-csr" file contents for each domain's certificate request.

CSR will use DNS TXT record verification. Use values defined in "<domain-folder>verification.md" file.

After creating certificate files, run the following command to generate java ketstore;

````cmd
convert_java_keystore <folder_name>
````

This will generate "keystore.pfx" and "keystore.jks" files under the specified <folder_name>. 

**Passphrases for these files will be same as "<folder_name>"**

