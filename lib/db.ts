import { PrismaClient } from "@prisma/client";

const globalPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalPrisma.prisma;

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = db;
