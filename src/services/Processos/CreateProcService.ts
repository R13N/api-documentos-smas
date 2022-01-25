import prismaClient from "../../prisma";

class CreateProcService {
  async execute(numero: string, nome: string) {

    const processoExiste = await prismaClient.processo.findUnique({
      where: {
        numero: numero
      }
    })

    if(processoExiste){
      throw new Error("Número de processo já cadastrado!")
    }

    const processo = await prismaClient.processo.create({
      data: {
        numero,
        nome,
      }
    })
    return processo;
    }

}

export { CreateProcService };