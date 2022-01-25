import { Request, Response } from "express";
import { DeleteProcService } from "../../services/Processos/DeleteProcService";

class DeleteProcController {

  async handle(request: Request, response: Response) {
    const { numero } = request.params;
  
    const deleteProcService = new DeleteProcService();

    try {
      await deleteProcService.execute(numero);
      return response.status(200).json({"message": `Processo nº ${numero} foi excluído com sucesso.`});
    } catch (error) {
      return response.status(400).json(error.message);
    }

  }

}

export { DeleteProcController };