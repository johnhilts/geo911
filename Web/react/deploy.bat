:: copy react files to web root for deployment
call npm run production
copy dist\*.* ..\geo911.web /y

