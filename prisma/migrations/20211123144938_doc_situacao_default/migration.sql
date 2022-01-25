-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_documentos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "data_documento" DATETIME NOT NULL,
    "data_recebimento" DATETIME NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "situacao" TEXT NOT NULL DEFAULT 'esperando resposta',
    "prazo" INTEGER NOT NULL,
    "numero_processo" TEXT NOT NULL,
    CONSTRAINT "documentos_numero_processo_fkey" FOREIGN KEY ("numero_processo") REFERENCES "processos" ("numero") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_documentos" ("data_documento", "data_recebimento", "destino", "id", "numero", "numero_processo", "origem", "prazo", "situacao", "tipo") SELECT "data_documento", "data_recebimento", "destino", "id", "numero", "numero_processo", "origem", "prazo", "situacao", "tipo" FROM "documentos";
DROP TABLE "documentos";
ALTER TABLE "new_documentos" RENAME TO "documentos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
