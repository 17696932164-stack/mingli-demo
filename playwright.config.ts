import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests',timeout:40000,use:{baseURL:'http://127.0.0.1:5173',viewport:{width:393,height:759},launchOptions:process.env.DEMO_EDGE?{executablePath:process.env.DEMO_EDGE}:{}},reporter:'list'});
