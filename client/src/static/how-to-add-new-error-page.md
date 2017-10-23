# How-To Add New Error Pages

"error.html" file uses external localization file definitions for getting error page details. In order to define a new error page, please follow the steps below;

## Create new error page folder

Error pages are defined by HTTP protocol error codes. So the first step is to create a folder that is named with the new error code.

For example we will define a 404 error page, so we will create a folder named "404" under the "static" folder.

## Define new error code in error.html (!IMPORTANT!)

You have to define the new error code in the error.html file. Following part must be editted;

```
...
        var allowedErrors = {
          "401":true,
          "<new_code>":true
        };
...
```

Defition value **must be** "true". 

You can temporarily disable any error page by setting its value to "false" (or comment out its definition)

## Create languge localization files

Next step is to create localization files for each supported language.

File name format is "<lang_code>.json". <lang_code> is standart 2 letter language definition codes. For example, for a german language file you will create a file called "de.json".

By default, system must have at least 2 definitions for Turkish and English localizations which are named as "tr.json" and "en.json" respectively.

## Create and copy assets 

Any images and logos releated with your page must be copied under "assets/pages/media/pages" folder.

## Update localization files

Following fields are defined in localization files

- **langCode:** this must be the standart language code of the file (eg: tr)
- **common.project_title:** This is the string shown on the titlebar of the broweser
- **error.title:** Title shown on the page
- **error.motto:** Short description of the error
- **error.description:** Detailed description of the error
- **error.background:** Path to background image
- **error.icon:** CSS class definition for icon-font area
- **error.fontColor:** CSS style defition for color of the "error.title" and "error.icon" elements

# Load page in the browser with new error code

Use the following URL format for the error page;

```
/static/error.html?code=<error_code>
```
