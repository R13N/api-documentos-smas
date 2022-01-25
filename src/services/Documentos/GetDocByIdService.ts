import prismaClient from "../../prisma";

class GetDocByIdService {

  async execute(id: string) {

    const documento = await prismaClient.documento.findUnique({
      where: {
        id: id
      },
      include: {
        historico: true
      }
    });

    return documento;

  }
}

export { GetDocByIdService };