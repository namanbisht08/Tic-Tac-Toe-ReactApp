#!/bin/bash
cd /frontend
pm2 delete react-app
pm2 start npm --name TTT -- start
