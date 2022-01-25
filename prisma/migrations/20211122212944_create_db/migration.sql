-- CreateTable
CREATE TABLE "processos" (
    "numero" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "documentos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "data_documento" DATETIME NOT NULL,
    "data_recebimento" DATETIME NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "prazo" INTEGER NOT NULL,
    "numero_processo" TEXT NOT NULL,
    CONSTRAINT "documentos_numero_processo_fkey" FOREIGN KEY ("numero_processo") REFERENCES "processos" ("numero") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "historico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documento_id" TEXT NOT NULL,
    CONSTRAINT "historico_documento_id_fkey" FOREIGN KEY ("documento_id") REFERENCES "documentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "processos_numero_key" ON "processos"("numero");
