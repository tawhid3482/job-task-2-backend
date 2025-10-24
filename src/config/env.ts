import dotenv from "dotenv";

dotenv.config();

interface EnvVars {
  PORT: string;
  NODE_ENV: string;
  DATABASE_URL: string;
  JWT_ACCESS_SECRET: string;
  JWT_EXPIRES_IN: string;
  BCRYPT_SALT_ROUNDS: string;
  JWT_REFRESH_SECRET: string;
  JWT_REFRESH_EXPIRES_IN: string;
}

const loadEnvVariables = (): EnvVars => {
  const requiredVars = [
    "PORT",
    "NODE_ENV",
    "DATABASE_URL",
    "JWT_ACCESS_SECRET",
    "JWT_EXPIRES_IN",
    "BCRYPT_SALT_ROUNDS",
    "JWT_REFRESH_SECRET",
    "JWT_REFRESH_EXPIRES_IN",
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
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!,
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS!,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
    JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN!,
  };
};

export const envVars = loadEnvVariables();
