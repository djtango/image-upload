#JS Upload Tech Test
Test suite used: karma/Jasmine

Run tests using (after install node modules):
``` karma start test/karma.conf.js ```

##Notes

The js includes one key function `isValidFileFormat` that checks for png, gif and jpg files. If the user does not select a file with this file extension (either via explorer menu or drag and drop), the user is prompted with an alert notifying them that the selected file is unsupported. The JS prevents users from actively submitting the file, although the check is performed using an inspection of the filename string - further server-side checks would be required to truly validate the filetype.

The style of the page was modeled after Vidsy's homepage, including use of header and footer banners and colour schemes.

##Next steps

- Developing a responsive page with mobile dropdown menu when page is reduced to mobile dimensions
- Improving the loading animation/file selection UX prompt
- Matching the font to the official Vidsy font
- Finding a more styling screen prompt for the selected file's filename
