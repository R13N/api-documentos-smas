import prismaClient from "../../prisma"

class DeleteDocByIdService {

  async execute(id: string) {
    const documento = await prismaClient.documento.findUnique({
      where: {
        id: id
      }
    })

    if(!documento) {
      throw new Error("Documento não localizado.")
    }

    await prismaClient.documento.delete({
      where: {
        id: id
      }
    })
  }

}

export { DeleteDocByIdService }