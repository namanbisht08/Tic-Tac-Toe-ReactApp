#!/bin/bash
cd /frontend
pm2 delete TTT
pm2 start npm --name TTT -- start
