/*
  Warnings:

  - You are about to alter the column `label` on the `Grade` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Grade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" INTEGER NOT NULL,
    "description" TEXT,
    "schoolId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Grade_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Grade" ("createdAt", "description", "id", "label", "schoolId", "updatedAt") SELECT "createdAt", "description", "id", "label", "schoolId", "updatedAt" FROM "Grade";
DROP TABLE "Grade";
ALTER TABLE "new_Grade" RENAME TO "Grade";
CREATE UNIQUE INDEX "Grade_label_key" ON "Grade"("label");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
