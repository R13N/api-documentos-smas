import prismaClient from "../../prisma";


class DeleteHistByIdService {

  async execute(id: string) {

    const historico = await prismaClient.historico.findUnique({
      where: {
        id: id
      }
    })

    if(!historico) {
      throw new Error("Historico não localizado!")
    }

    await prismaClient.historico.delete({
      where: {
        id: id
      }
    })
  }
}

export { DeleteHistByIdService };