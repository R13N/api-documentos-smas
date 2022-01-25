import prismaClient from "../../prisma";

class GetAllProcService {

  async execute(numero: string) {

      const processos = await prismaClient.processo.findMany({
        where: {
          numero: {
            contains: numero,
          }
        }
      });

      return processos;

  }
}

export { GetAllProcService };
