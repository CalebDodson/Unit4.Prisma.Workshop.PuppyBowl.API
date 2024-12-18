-- CreateEnum
CREATE TYPE "Status" AS ENUM ('field', 'bench');

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'field',

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
