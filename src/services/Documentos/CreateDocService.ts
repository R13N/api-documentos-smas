import prismaClient from '../../prisma';

  interface Documento {
    tipo: string;
    numero: string;
    data_documento: Date;
    data_recebimento: Date;
    origem: string;
    destino: string;
    situacao: string;
    prazo: number;
    numero_processo: string;
  }

class CreateDocService {
  async execute(documento: Documento) {

    const processoExiste = await prismaClient.processo.findUnique({
      where: {
        numero: documento.numero_processo
      }
    })

    if(!processoExiste){
      throw new Error(`Processo ${documento.numero_processo} não localizado! Se for um novo processo, favor cadastralo primeiro.`)
    }

    const documentoExiste = await prismaClient.documento.findFirst({
      where: {
        numero_processo: processoExiste.numero,
        origem: documento.origem,
        numero: documento.numero
      }
    })

    if(documentoExiste) {
      throw new Error("Documento já cadastrado.")
    }
    
    const novoDocumento = await prismaClient.documento.create({
      data:documento
    })

    return novoDocumento;
    
  }
}

export { CreateDocService, Documento };