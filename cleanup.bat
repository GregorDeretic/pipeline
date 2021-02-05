del /q "C:\temp\app\*"
FOR /D %%p IN ("C:\temp\app\*.*") DO rmdir "%%p" /s /q