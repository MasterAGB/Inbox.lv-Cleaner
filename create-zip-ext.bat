SET version=
SET WINRAR="C:\Program Files\WinRAR"
CD "C:\Users\AGB\Dropbox\Google chrome extensions\APPS\Inbox.lv-Cleaner\"
@echo off
for /F "usebackq tokens=1,2 delims==" %%i in (`wmic os get LocalDateTime /VALUE 2^>NUL`) do if '.%%i.'=='.LocalDateTime.' set ldt=%%j
set ldt=%ldt:~0,4%-%ldt:~4,2%-%ldt:~6,2%-%ldt:~8,2%-%ldt:~10,2%-%ldt:~12,6%
echo Local date is [%ldt%]
@echo on
%WINRAR%\WinRAR.exe a "ext %version%%ldt%.zip" *.html *.js *.ico *.css *.json *.png
pause;






