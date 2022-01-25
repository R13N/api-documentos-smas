import prismaClient from "../../prisma";

class GetDocByFilterService {

  async execute(filter: string) {

      const documentos = await prismaClient.documento.findMany({
        where: {
          OR: [
            {
              numero_processo: {
                contains: filter,
              },
            },
            {
              situacao: {
                contains: filter,
              },
            },
          ],
        },
        include: {
          historico: true,
        },
        orderBy: {
          data_documento: "desc"
        }
      });

      return documentos;

  }
}

export { GetDocByFilterService };