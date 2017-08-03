function listaAulas(){
    let aulas = [
      {id: 0, nome: 'Orientação a objetos', emAndamento: false},
      {id: 1, nome: 'Banco de Dados', emAndamento: false},
      {id: 2, nome: 'HTML/CSS', emAndamento: false},
      {id: 3, nome: 'Javascript', emAndamento: false},
      {id: 4, nome: 'AngularJS', emAndamento: false}
];
    return aulas
}
function listaInstrutores(){
    let instrutores = [
      { 
        nome: 'Zeca',
        sobrenome: 'Diabo',
        idade: 30,
        email: 'zequinha@hell.com',
        jaDeuAula: true,
        aula: [listaAulas()[0], listaAulas()[3]]
      }
    ];
    return instrutores
}


