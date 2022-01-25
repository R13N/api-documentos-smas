import { Request, Response } from "express";
import { DeleteDocByIdService } from "../../services/Documentos/DeleteDocByIdService";

class DeleteDocByIdController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteDocByIdService = new DeleteDocByIdService();

    try {
      await deleteDocByIdService.execute(id);
      return response.status(200).json({"message": "Excluído com sucesso."});
    } catch (error) {
      return response.json(error.message);
    }
  }

}

export { DeleteDocByIdController };