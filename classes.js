class Projeto {
  constructor({ nomeProjeto, estaAtivo, estaNaTG }) {
    this.nomeProjeto = nomeProjeto;
    this.estaAtivo = estaAtivo;
    this.estaNaTG = estaNaTG;
    this.subProjetos = [];
  }

  addSubProjeto(subProjetos) {
    this.subProjetos.push(...subProjetos);
    return this;
  }
}

class SubProjeto {
  constructor({ nomeSubProjeto, tipoSubprojeto, percentualSubProjeto }) {
    this.nomeSubProjeto = nomeSubProjeto;
    this.tipoSubprojeto = tipoSubprojeto;
    this.percentualSubProjeto = percentualSubProjeto;
    this.atividades = [];
  }

  addAtividade(atividades) {
    this.atividades.push(...atividades);
    return this;
  }
}

class Atividade {
  constructor({ nomeAtividade, diagrama, operacao, subOperacao }) {
    this.nomeAtividade = nomeAtividade;
    this.diagrama = diagrama;
    this.operacao = operacao;
    this.subOperacao = subOperacao;
  }
}

const ATIVIDADE_01 = new Atividade({
  nomeAtividade: 'Tratamento de dados',
  diagrama: '1001975412',
  operacao: '10',
  subOperacao: '40',
});

const ATIVIDADE_02 = new Atividade({
  nomeAtividade: 'Apoio à gestão',
  diagrama: '1000123456',
  operacao: '120',
});

const ATIVIDADE_03 = new Atividade({
  nomeAtividade: 'Embarque',
  diagrama: '1000987654',
  operacao: '190',
});

const SUBPROJETO_01 = new SubProjeto({
  nomeSubProjeto: 'jubarte',
  tipoSubprojeto: 'exp',
  percentualSubProjeto: 56,
});

const SUBPROJETO_02 = new SubProjeto({
  nomeSubProjeto: 'cachalote',
  tipoSubprojeto: 'exp',
  percentualSubProjeto: 44,
});

const PROJETO = new Projeto({
  nomeProjeto: 'Búzios Nodes GXT',
  estaAtivo: true,
  estaNaTG: true,
});

SUBPROJETO_01.addAtividade([ATIVIDADE_01, ATIVIDADE_02]);
SUBPROJETO_02.addAtividade([ATIVIDADE_03]);
PROJETO.addSubProjeto([SUBPROJETO_01, SUBPROJETO_02]);

console.log('===============');

console.log(PROJETO);

console.log('-------------------');

const G = 9.8;

const J = 4.6;
const K = 3.1415;
