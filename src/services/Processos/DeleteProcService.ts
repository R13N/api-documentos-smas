import prismaClient from "../../prisma";

class DeleteProcService {

  async execute(numero: string) {

    const processo = await prismaClient.processo.findUnique({
      where: {
        numero: numero
      }
    })

    if(!processo) {
      throw new Error("Número de processo não encontrado!")
    }

    await prismaClient.processo.delete({
      where: {
        numero: numero
      }
    })
  }

}

export { DeleteProcService };