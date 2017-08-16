@echo off
set passphrase=%1

echo Converting to Java keystore
cd %passphrase%
if %errorlevel% neq 0 goto error
del keystore.*
if %errorlevel% neq 0 goto error
echo Step 1/2: start
openssl pkcs12 -export -name %passphrase% -in domain-cert.pem -inkey domain-key.pem -out keystore.pfx -password pass:%passphrase%
if %errorlevel% neq 0 goto error
echo Step 1/2: complete
echo Step 2/2: start
keytool -importkeystore -destkeystore keystore.jks -srckeystore keystore.pfx -srcstoretype pkcs12 -alias %passphrase% -srcstorepass %passphrase% -deststorepass %passphrase%
if %errorlevel% neq 0 goto error
echo Step 2/2: complete

if %errorlevel% neq 0 goto error

goto end

:error
echo error occured, exiting! (%errorlevel%)
rem exit /b %errorlevel%

:end
cd ..
