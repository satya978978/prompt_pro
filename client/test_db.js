import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;
    console.log("✅ DB connected:", result);
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
