const functions = require("firebase-functions");

const app = require("express")();

const admin = require("firebase-admin");


admin.initializeApp();

const ac = admin.firestore().collection("Academia");


// Academia

app.get("/Academia", async function (req, res) {

  aca = [];
  const response = await (await ac.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    aca.push(aux);
  });
  res.json(aca);
});

app.post("/Academia", (req, res) => {

  const novaAcademia = {

    Cnpj: req.body.Cnpj,

    Endereço: req.body.Endereço,

    Nome: req.body.Nome,
  };

  ac.add(novaAcademia).then((response) => {
    res.send("Academia adicionada com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/Academia/:id", async function (req, res) {

  const response = await (await ac.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novaAcademia = {
        Cnpj: req.body.Cnpj || element.data().Cnpj,
        Endereço: req.body.Endereço || element.data().Endereço,
        Nome: req.body.Nome || element.data().Nome,
      };
      ac.doc(req.params.id)
        .update(novaAcademia)
        .then(function () {

          res.send("Academia atualizada com sucesso");
          return res.json(novaAcademia);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/Academia/:id", async function (req, res) {
  const aca = await ac.doc(req.params.id).delete();
  res.send("Academia excluida com sucesso");
});

// Cliente

const cli = admin.firestore().collection("Cliente");

app.get("/Cliente", async function (req, res) {

  clien = [];
  const response = await (await cli.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    clien.push(aux);
  });
  res.json(clien);
});

app.post("/Cliente", (req, res) => {

  const novoCliente = {

    Cnpj_academia: req.body.Cnpj_academia,

    Email:req.body.Email,

    Endereço: req.body.Endereço,

    ID_Financeiro: req.body.ID_Financeiro,

    ID_Treino: req.body.ID_Treino,

    Matricula: req.body.Matricula,

    Nome: req.body.Nome,

    Telefone: req.body.Telefone,
  };

  cli.add(novoCliente).then((response) => {
    res.send("Cliente adicionado com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/Cliente/:id", async function (req, res) {

  const response = await (await cli.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novoCliente = {
        Cnpj_academia: req.body.Cnpj_academia || element.data().Cnpj_academia,
        Email: req.body.Email || element.data().Email,
        Endereço: req.body.Endereço || element.data().Endereço,
        ID_Financeiro: req.body.ID_Financeiro || element.data().ID_Financeiro,
        ID_Treino: req.body.ID_Treino || element.data().ID_Treino,
        Matricula: req.body.Matricula || element.data().Matricula,
        Nome: req.body.Nome || element.data().Nome,
        Telefone: req.body.Telefone || element.data().Telefone,
      };
      cli.doc(req.params.id)
        .update(novoCliente)
        .then(function () {

          res.send("Cliente atualizado com sucesso");
          return res.json(novoCliente);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/Cliente/:id", async function (req, res) {
  const aca = await cli.doc(req.params.id).delete();
  res.send("Cliente excluido com sucesso");
});


// Treino

const tr = admin.firestore().collection("Treino");

app.get("/Treino", async function (req, res) {

  tre = [];
  const response = await (await tr.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    tre.push(aux);
  });
  res.json(tre);
});

app.post("/Treino", (req, res) => {

  const novoTreino = {

    Descriçao: req.body.Descriçao,

    Dia:req.body.Dia,

    Tipo: req.body.Tipo,

    
  };

  tr.add(novoTreino).then((response) => {
    res.send("Treino adicionado com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/Treino/:id", async function (req, res) {

  const response = await (await tr.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novoTreino = {
        Descriçao: req.body.Descriçao || element.data().Descriçao,
        Dia: req.body.Dia || element.data().Dia,
        Tipo: req.body.Tipo || element.data().Tipo,
        
      };
      tr.doc(req.params.id)
        .update(novoTreino)
        .then(function () {

          res.send("Treino atualizado com sucesso");
          return res.json(novoTreino);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/Treino/:id", async function (req, res) {
  const aca = await tr.doc(req.params.id).delete();
  res.send("Treino excluido com sucesso");
});

// Conta 

const con = admin.firestore().collection("Conta");

app.get("/Conta", async function (req, res) {

  cont = [];
  const response = await (await con.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    cont.push(aux);
  });
  res.json(cont);
});

app.post("/Conta", (req, res) => {

  const novaConta = {

    Email: req.body.Email,

    Endereço:req.body.Endereço,

    Matricula: req.body.Matricula,

    Nome: req.body.Nome,

    
  };

  con.add(novaConta).then((response) => {
    res.send("Conta adicionada com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/Conta/:id", async function (req, res) {

  const response = await (await con.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novaConta = {
        Email: req.body.Email || element.data().Email,
        Endereço: req.body.Endereço || element.data().Endereço,
        Matricula: req.body.Matricula || element.data().Matricula,
        Nome: req.body.Nome || element.data().Nome,
        
      };
      con.doc(req.params.id)
        .update(novaConta)
        .then(function () {

          res.send("Conta atualizada com sucesso");
          return res.json(novaConta);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/Conta/:id", async function (req, res) {
  const aca = await con.doc(req.params.id).delete();
  res.send("Conta excluido com sucesso");
});

// Funcionario

const fn = admin.firestore().collection("Funcionario");

app.get("/Funcionario", async function (req, res) {

  funci = [];
  const response = await (await fn.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    funci.push(aux);
  });
  res.json(funci);
});

app.post("/Funcionario", (req, res) => {

  const novoFuncionario = {

    Cnpj_Academia:req.body.Cnpj_Academia,

    Email: req.body.Email,

    Endereço:req.body.Endereço,

    Horario:req.body.Horario,

    Matricula: req.body.Matricula,

    Nome: req.body.Nome,

    Salario:req.body.Salario,

    Telefone:req.body.Telefone,

    
  };

  fn.add(novoFuncionario).then((response) => {
    res.send("Funcionario adicionado com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/Funcionario/:id", async function (req, res) {

  const response = await (await fn.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novoFuncionario = {
        Cnpj_Academia: req.body.Cnpj_Academia || element.data().Cnpj_Academia,
        Email: req.body.Email || element.data().Email,
        Endereço: req.body.Endereço || element.data().Endereço,
        Horario: req.body.Horario || element.data().Horario,
        Matricula: req.body.Matricula || element.data().Matricula,
        Nome: req.body.Nome || element.data().Nome,
        Salario: req.body.Salario || element.data().Salario,
        Telefone: req.body.Telefone || element.data().Telefone,
      };
      fn.doc(req.params.id)
        .update(novoFuncionario)
        .then(function () {

          res.send("Funcionario atualizado com sucesso");
          return res.json(novoFuncionario);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/Funcionario/:id", async function (req, res) {
  const aca = await fn.doc(req.params.id).delete();
  res.send("Funcionario excluido com sucesso");
});

// Personal

const per = admin.firestore().collection("Personal");

app.get("/Personal", async function (req, res) {

  perso = [];
  const response = await (await per.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    perso.push(aux);
  });
  res.json(perso);
});

app.post("/Personal", (req, res) => {

  const novoPersonal = {

    

    Email: req.body.Email,

    Endereço:req.body.Endereço,

    Horario:req.body.Horario,

    Matricula: req.body.Matricula,

    Nome: req.body.Nome,

    Salario:req.body.Salario,

    Telefone:req.body.Telefone,

    
  };

  per.add(novoPersonal).then((response) => {
    res.send("Personal adicionado com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/Personal/:id", async function (req, res) {

  const response = await (await per.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novoPersonal = {
        
        Email: req.body.Email || element.data().Email,
        Endereço: req.body.Endereço || element.data().Endereço,
        Horario: req.body.Horario || element.data().Horario,
        Matricula: req.body.Matricula || element.data().Matricula,
        Nome: req.body.Nome || element.data().Nome,
        Salario: req.body.Salario || element.data().Salario,
        Telefone: req.body.Telefone || element.data().Telefone,
      };
      per.doc(req.params.id)
        .update(novoPersonal)
        .then(function () {

          res.send("Personal atualizado com sucesso");
          return res.json(novoPersonal);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/Personal/:id", async function (req, res) {
  const aca = await per.doc(req.params.id).delete();
  res.send("Personal excluido com sucesso");
});

// Gerente

const ger = admin.firestore().collection("Gerente");

app.get("/Gerente", async function (req, res) {

  gere = [];
  const response = await (await ger.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    gere.push(aux);
  });
  res.json(gere);
});

app.post("/Gerente", (req, res) => {

  const novoGerente = {

    

    Email: req.body.Email,

    Endereço:req.body.Endereço,

    Horario:req.body.Horario,

    Matricula: req.body.Matricula,

    Nome: req.body.Nome,

    Salario:req.body.Salario,

    Telefone:req.body.Telefone,

    
  };

  ger.add(novoGerente).then((response) => {
    res.send("Gerente adicionado com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/Gerente/:id", async function (req, res) {

  const response = await (await ger.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novoGerente = {
        
        Email: req.body.Email || element.data().Email,
        Endereço: req.body.Endereço || element.data().Endereço,
        Horario: req.body.Horario || element.data().Horario,
        Matricula: req.body.Matricula || element.data().Matricula,
        Nome: req.body.Nome || element.data().Nome,
        Salario: req.body.Salario || element.data().Salario,
        Telefone: req.body.Telefone || element.data().Telefone,
      };
      ger.doc(req.params.id)
        .update(novoGerente)
        .then(function () {

          res.send("Gerente atualizado com sucesso");
          return res.json(novoGerente);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/Gerente/:id", async function (req, res) {
  const aca = await ger.doc(req.params.id).delete();
  res.send("Gerente excluido com sucesso");
});

//Financeiro
const fin = admin.firestore().collection("Financeiro");

app.get("/Financeiro", async function (req, res) {

  fina = [];
  const response = await (await fin.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    fina.push(aux);
  });
  res.json(fina);
});

app.post("/Financeiro", (req, res) => {

  const novoFinanceiro = {

    

    Dia_de_Pagamento: req.body.Dia_de_Pagamento,

    Duraçao:req.body.Duraçao,

    Plano:req.body.Plano,

    

    
  };

  fin.add(novoFinanceiro).then((response) => {
    res.send("FInanceiro adicionado com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/Financeiro/:id", async function (req, res) {

  const response = await (await fin.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novoFinanceiro = {
        
        Dia_de_Pagamento: req.body.Dia_de_Pagamento || element.data().Dia_de_Pagamento,
        Duraçao: req.body.Duraçao || element.data().Duraçao,
        Plano: req.body.Plano || element.data().Plano,
        
      };
      fin.doc(req.params.id)
        .update(novoFinanceiro)
        .then(function () {

          res.send("Financeiro atualizado com sucesso");
          return res.json(novoFinanceiro);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/Financeiro/:id", async function (req, res) {
  const aca = await fin.doc(req.params.id).delete();
  res.send("FInanceiro excluido com sucesso");
});

//Criar Treino

const ct = admin.firestore().collection("CriaTreino");

app.get("/CriaTreino", async function (req, res) {

  cTreino = [];
  const response = await (await ct.get()).docs;
  response.forEach(element => {
    const obj = { _id: element.id };
    const aux = Object.assign({}, element.data(), obj);
    cTreino.push(aux);
  });
  res.json(cTreino);
});

app.post("/CriaTreino", (req, res) => {

  const novoCriaTreino = {

    

    ID_Personal: req.body.ID_Personal,

    ID_Treino:req.body.ID_Treino,

    

    
  };

  ct.add(novoCriaTreino).then((response) => {
    res.send("Treino criado com sucesso");
    res.send(response);
    return null;

  }).catch(error => (console.log(error)));

});

app.put("/CriaTreino/:id", async function (req, res) {

  const response = await (await ct.get()).docs;
  response.forEach(async element => {
    if (element.id === req.params.id) {
      const novoCriaTreino = {
        
        ID_Personal: req.body.ID_Personal || element.data().ID_Personal,
        ID_Treino: req.body.ID_Treino || element.data().ID_Treino,
        
      };
      ct.doc(req.params.id)
        .update(novoCriaTreino)
        .then(function () {

          res.send("Criador de treino atualizado com sucesso");
          return res.json(novoCriaTreino);
        }).catch(error => (console.log(error)));
    }
  });
});
app.delete("/CriaTreino/:id", async function (req, res) {
  const aca = await ct.doc(req.params.id).delete();
  res.send("Criador de treino excluido com sucesso");
});
exports.api = functions.https.onRequest(app);