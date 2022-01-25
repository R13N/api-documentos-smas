import { Router } from 'express';

import { CreateProcController } from './controllers/Processos/CreateProcController';
import { GetAllProcController } from './controllers/Processos/GetAllProcController';
import { DeleteProcController } from './controllers/Processos/DeleteProcController';

import { CreateDocController } from './controllers/Documentos/CreateDocController';
import { GetDocByFilterController } from './controllers/Documentos/GetDocByFilterController';
import { GetDocByIdController } from './controllers/Documentos/GetDocByIdController';
import { GetAllDocsController } from './controllers/Documentos/GetAllDocsController';

import { CreateHistByDocController } from './controllers/Historicos/CreateHistByDocController';
import { EditHistByIdController } from './controllers/Historicos/EditHistByIdController';
import { DeleteHistByIdController } from './controllers/Historicos/DeleteHistByIdController';
import { DeleteDocByIdController } from './controllers/Documentos/DeleteDocByIdController';
import { AtualizarSitDocController } from './controllers/Documentos/AtualizarSitDocController';

const router = Router();

router.post("/processos", new CreateProcController().handle);
router.get("/processos", new GetAllProcController().handle);
router.delete("/processos/:numero", new DeleteProcController().handle);

router.post("/documentos", new CreateDocController().handle);
router.get("/documentos", new GetDocByFilterController().handle);
router.get("/documentos/all", new GetAllDocsController().handle);
router.get("/documentos/:id", new GetDocByIdController().handle);
router.delete("/documentos/:id", new DeleteDocByIdController().handle);
router.put("/documentos/:id", new AtualizarSitDocController().handle);

router.post("/documentos/:id", new CreateHistByDocController().handle);
router.post("/historico/:id", new EditHistByIdController().handle);
router.delete("/historico/:id", new DeleteHistByIdController().handle);

export { router };