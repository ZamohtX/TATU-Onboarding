/*
  Warnings:

  - You are about to drop the `Obra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Obra";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Attraction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Work" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT,
    "description" TEXT,
    "attraction_id" INTEGER NOT NULL,
    CONSTRAINT "Work_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "Attraction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
