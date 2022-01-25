import prismaClient from "../../prisma";

class GetDocByFilterService {

  async execute(numero: string, situacao: string) {

      const documentos = await prismaClient.documento.findMany({
        where: {
          OR: [
            {
              numero_processo: {
                contains: numero,
              },
              situacao: situacao
            }  
          ]
        },
        include: {
          historico: true
        },
        orderBy: {
          data_documento: "desc"
        }
      });

      return documentos;

  }
}

export { GetDocByFilterService };