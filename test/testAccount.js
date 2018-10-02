let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let urlbase = 'http://localhost:3005/api';
let path = '/account';

chai.use(chaiHttp);

describe('Account', () => {
    it('/GET Account', (done) => {
        chai.request(urlbase)
        .get(path)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});

/*
    TODO:
    - Configurar banco de teste
    - Testar inclusão de contas
    - Testar inclusão de Categorias
    - Testar inclusão de transações
    - Testar inclusão de orçamento
    - Criar Schema Orçamento
        - Mes/Ano
            - Categorias
                - Valores Previstos
    - Testar exclusões e atualizações
    - Testar Get de orçamento, com valores previstos e reais

    - api/budget/chart
        Retorna os valores previstos
        Retorna os totais executados
        Consolidados ou não

    - Precisa de um tipo de conta "Cartão de crédito"? (type 'CREDCARD')

*/
