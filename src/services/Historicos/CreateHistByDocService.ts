import prismaClient from "../../prisma";

class CreateHistByDocService {

  async execute(id: string, text: string) {

    const documento = await prismaClient.documento.findUnique({
      where: {
        id: id
      }
    })

    if(!documento) {
      throw new Error("Não é possível cadastrar um histórico sem documento.")
    }
    
    await prismaClient.historico.create({
      data: {
        documento_id: id,
        text: text
      }
    })
    
    return documento;
  }

}

export { CreateHistByDocService };