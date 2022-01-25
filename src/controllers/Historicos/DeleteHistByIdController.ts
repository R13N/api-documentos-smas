import { Request, Response } from "express";
import { DeleteHistByIdService } from "../../services/Historicos/DeleteHistByIdService";

class DeleteHistByIdController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteHistByIdService = new DeleteHistByIdService();

    try {
      await deleteHistByIdService.execute(id);
      return response.status(200).json({"message": "Excluído com sucesso."});
    } catch (error) {
      return response.json(error.message);
    }

  }

}

export { DeleteHistByIdController }