/*
  Warnings:

  - You are about to drop the column `createddAt` on the `blogPosts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_blogPosts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "blogPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_blogPosts" ("content", "id", "title", "updatedAt", "userId") SELECT "content", "id", "title", "updatedAt", "userId" FROM "blogPosts";
DROP TABLE "blogPosts";
ALTER TABLE "new_blogPosts" RENAME TO "blogPosts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
