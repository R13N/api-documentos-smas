import prismaClient from "../../prisma";

class GetAllDocsService {
  async execute() {
    return await prismaClient.documento.findMany({
      include: {
        historico: true
      },
      orderBy: {
        data_documento: 'desc',
      }
    });
  }
}

export { GetAllDocsService };