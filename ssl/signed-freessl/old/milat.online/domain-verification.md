# Verification

To verify domain ownership using DNS verification, you will need to create DNS records of TXT type as shown below.

Please remember that it takes some time for new DNS records to become "visible", so you may need to wait for 15-20 minutes before clicking "Next". 

You can check whether your records became visible with the following command: "nslookup -q=TXT XXX", where XXX is one of the records as shown below.

| Domain TXT Record	                | Value                                       |
|-----------------------------------|---------------------------------------------|
| _acme-challenge.milat.online    	| O3SoaG7RysfL_vsh6LIqaHPzfJCoGwKGNsl0I_neo0Y |
| _acme-challenge.nac.milat.online	| kvOLHpjXy0Ug87DaFuRj9sZW3Tug-x2DvUWTATo2p7I |
| _acme-challenge.ayb.milat.online	| VJtyki91hic4EWzfPyXYfU5S9M-Xz8s0OmI64bJ_Csk |
| _acme-challenge.ctrl.milat.online	| PiMQAqZNB0WDV1Cz3r6JF74C6J49wWxwYkV0ggkkjj4 |
| _acme-challenge.c1.milat.online  	| Bw1Db6I-BQHZOI1LsS3ZaDI3lxxuJ8ABBV4pDlpQ9xo |
| _acme-challenge.c2.milat.online  	| YHbTA4rH7NVXNGSJLiTaVeuc1dl9VWTSTZ9KmXXNa3o |
| _acme-challenge.c3.milat.online  	| XX_JTbAX-4RECnl6lsrRZJ-toCODIHIw-m-EU6Psz_k |
| _acme-challenge.c4.milat.online  	| nOSDUNivOcSxoO8xOEi8cXKy_WmZi7dA7-al-hJG0xY |
| _acme-challenge.c5.milat.online  	| U9m0-7HOPCBasez211sJmj8uEMInCkOJOK7UgcgGmLQ |
| _acme-challenge.c6.milat.online  	| B4OWA7NxSCzMESKngON4h48qaMUDtGP_e1DMENKRfAY |
| _acme-challenge.c7.milat.online  	| n_4MgkiV7qRJjR__-kWsVZSCKxjIBHEp6TXj3s1ZnD8 |
| _acme-challenge.c8.milat.online  	| iEsk59XFe8KdDNFrTNYrXYlDFNrd11eyMLMDztt5790 |
| _acme-challenge.c9.milat.online  	| JO3o7tqNRNlpq4KMR1BTP5gRDdns7ccFHUkfJINPsEg |
| _acme-challenge.c10.milat.online 	| FcKViz_VeuQXAHJZXrgLXnC-XsD3bYxQNA4Tdgc2TsI |