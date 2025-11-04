import dotenv from "dotenv";

dotenv.config();

interface EnvVars {
  PORT: string;
  NODE_ENV: string;
  FRONTEND_URL: string;
  DATABASE_URL: string;
  JWT_ACCESS_SECRET: string;
  JWT_EXPIRES_IN: string;
  EMAIL: string;
  APP_PASS: string;
  BCRYPT_SALT_ROUNDS: string;
  JWT_REFRESH_SECRET: string;
  JWT_REFRESH_EXPIRES_IN: string;
  CPANEL_HOST: string;
  CPANEL_USER: string;
  CPANEL_PASS: string;
  CPANEL_UPLOAD_PATH: string;
}

const loadEnvVariables = (): EnvVars => {
  const requiredVars = [
    "PORT",
    "NODE_ENV",
    "FRONTEND_URL",
    "DATABASE_URL",
    "JWT_ACCESS_SECRET",
    "JWT_EXPIRES_IN",
    "EMAIL",
    "APP_PASS",
    "BCRYPT_SALT_ROUNDS",
    "JWT_REFRESH_SECRET",
    "JWT_REFRESH_EXPIRES_IN",
    "CPANEL_HOST",
    "CPANEL_USER",
    "CPANEL_PASS",
    "CPANEL_UPLOAD_PATH",
  ] as const;

  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`❌ Environment variable "${key}" is not set`);
    }
  });

  return {
    PORT: process.env.PORT!,
    NODE_ENV: process.env.NODE_ENV!,
    DATABASE_URL: process.env.DATABASE_URL!,
    FRONTEND_URL: process.env.FRONTEND_URL!,
    EMAIL: process.env.EMAIL!,
    APP_PASS: process.env.APP_PASS!,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!,
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS!,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
    JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN!,
    CPANEL_HOST: process.env.CPANEL_HOST!,
    CPANEL_USER: process.env.CPANEL_USER!,
    CPANEL_PASS: process.env.CPANEL_PASS!,
    CPANEL_UPLOAD_PATH: process.env.CPANEL_UPLOAD_PATH!,
  };
};

export const envVars = loadEnvVariables();
