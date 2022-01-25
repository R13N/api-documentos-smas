import prismaClient from "../../prisma";

class EditHistByIdService {

  async execute(id: string, text: string) {

    const historico = await prismaClient.historico.findUnique({
      where: {
        id: id
      }
    })

    if(!historico) {
      throw new Error("Histórico não encontrado!")
    }
    
    await prismaClient.historico.update({
      where: {
        id: id
      },
      data: {
        text: text
      }
    })
  }

}

export { EditHistByIdService };