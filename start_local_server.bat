@echo off
echo Killing port 3005...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3005"') do taskkill /F /PID %%a 2>nul
if exist .next\dev\lock del /f .next\dev\lock 2>nul
echo Starting Restaurant Stausoe on port 3005...
start http://localhost:3005
call npm run dev -- --port 3005
