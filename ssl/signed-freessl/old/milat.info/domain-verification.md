# Verification

To verify domain ownership using DNS verification, you will need to create DNS records of TXT type as shown below.

Please remember that it takes some time for new DNS records to become "visible", so you may need to wait for 15-20 minutes before clicking "Next". 

You can check whether your records became visible with the following command: "nslookup -q=TXT XXX", where XXX is one of the records as shown below.

| Domain TXT Record	              | Value                                       |
|---------------------------------|---------------------------------------------|
| _acme-challenge.milat.info      |	pJZdd1ujISnKhnni2GiIWFCaMEcLE7Bvp6dBWStlPGM |
| _acme-challenge.ayb.milat.info  |	bjYtJHs7nFYlok4JfrancmyojpFRhLVuq_SAk_wBXmE |
| _acme-challenge.nac.milat.info  |	fIAd-KNjGnoOAC0lgaX85yzIonHXu8MmqeKxP3M9ff0 |
| _acme-challenge.ctrl.milat.info |	XCcCcPr8LgdEE9vpegj2cct4RuvG-7vJX1uHjWbTj8U |
| _acme-challenge.c1.milat.info   |	xSe56axzKlOMA-9o4Cq7Bd5grTgPKJI6CVoQcpw362E |
| _acme-challenge.c2.milat.info   |	6yeY6rfVudV019rAQ-MLmC7Yy1fYwteArh2oHja2e3U |
| _acme-challenge.c3.milat.info   |	GGlBnqmRRmiwCe2Rb3TXFGpv7OdeL6VK_o-JH26osvg |
| _acme-challenge.c4.milat.info   |	DJBEwgZ7W5YToayZD6mvX462TrZoYOtuzr0olkb3hTY |
| _acme-challenge.c5.milat.info   |	DA7xxvc9j-Zpxii8NBFzZN1bouvFaJQxCrEsVK4iu3w |
| _acme-challenge.c6.milat.info   |	JDJoTcYzWQ1oN2WrQ1gLkImfSitVFHO0FdYBOH-XLuE |
| _acme-challenge.c7.milat.info   |	zs9wsIGjOwHSZmkK84Jb2_dOG1tG070npIWK6zw2rmU |
| _acme-challenge.c8.milat.info   |	utCyYkPZf2RIT15wNqB1cXgS9GAtbSOFOgB2ybrf8A0 |
| _acme-challenge.c9.milat.info   |	2Z9R58eb4x4-NdNfOW4_UEBCbS9_epMcHr-OSXvbbnk |
| _acme-challenge.c10.milat.info  |	nmyLGT18Ga1NNve8c4STBSWoZNdstNenVvVaYnVNg3Q |
