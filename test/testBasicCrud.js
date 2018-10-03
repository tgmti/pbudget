let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let urlbase = 'http://localhost:3005/api';
let testPaths = [ 
    { name: 'Account', path: '/account', post: {name : 'Carteira', type : 'WALLET'} },
    { name: 'Category', path: '/category', post: {name : 'Despesas'}},
    { name: 'Transaction', path: '/transaction', post: {
        description : 'teste despesa',
        category_id : '5bb413619993f42f08cd8704', //TODO: buscar id como nos testes?
        debit_account_id : '5bb412d77dab5a0b1018021f',
        value : 10,
    }} ,
];
    
chai.use(chaiHttp);

describe('GET', () => {

    testPaths.map( (test) => {
        it('/GET ' + test.name, (done) => {
            chai.request(urlbase)
            .get(test.path)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });
});

describe('POST', () => {

    testPaths.map( (test) => {
        it('/POST ' + test.name, (done) => {
            chai.request(urlbase)
            .post(test.path)
            .send(test.post)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
        });
    });
});

describe('PUT', () => {

    it('/PUT :id Transaction ', (done) => {
        chai.request(urlbase)
        .put("/api/transaction/5bb41feea9719f3284c9cd42")
        .send(testPaths[2].post)
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            done();
        });
    });
});

/*
    TODO:
    [X] Configurar banco de teste
    [X] Testar inclusão de contas
    [X] Testar inclusão de Categorias
    [X] Testar inclusão de transações
    [ ] Criar Schema Orçamento
        [ ] Mes/Ano
            [ ] Categorias
                [ ] Valores Previstos
    [ ] Testar inclusão de orçamento
    [ ] Testar exclusões e atualizações
    [ ] Testar Get de orçamento, com valores previstos e reais

    [ ] api/budget/chart
        Retorna os valores previstos
        Retorna os totais executados
        Consolidados ou não

    [ ] Precisa de um tipo de conta "Cartão de crédito"? (type 'CREDCARD')

    Populate: Trás a transação com os dados da categoria e das contas
    http://localhost:3005/api/transaction/5bb42d35a22b071da4969a97?populate=category_id&populate=debit_account_id&populate=credit_account_id


*/
