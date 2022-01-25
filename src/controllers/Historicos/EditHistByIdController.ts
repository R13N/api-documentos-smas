import { Request, Response } from "express";
import { EditHistByIdService } from "../../services/Historicos/EditHistByIdService";

class EditHistByIdController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { text } = request.body;

    const editHistByIdService = new EditHistByIdService();

    try {
      await editHistByIdService.execute(id, text);
      return response.status(200).end();
    } catch (error) {
      return response.json(error.message);
    }


    
  }

}

export { EditHistByIdController };