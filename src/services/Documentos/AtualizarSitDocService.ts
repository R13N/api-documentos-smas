import prismaClient from "../../prisma";

class AtualizarSitDocService {

  async execute(id: string, situacao: string) {
    
    const documento = await prismaClient.documento.findUnique({
      where: {
        id: id
      }
    })
    
    if(!documento) {
      throw new Error("Documento não localizado!")
    }
    
    await prismaClient.documento.update({
      where: {
        id: id
      },
      data: {
        situacao: situacao
      }
    })

  }

}

export { AtualizarSitDocService };