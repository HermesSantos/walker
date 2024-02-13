import puppeteer from 'puppeteer';
import path from 'path'
import inquirer from 'inquirer';
import { getName } from './helpers/name.js';
import { generateCnpj } from './helpers/cnpj.js';
import { getCPF } from './helpers/cpf.js';
import { generatePhoneNumber } from './helpers/phone.js';
import { generateEmail } from './helpers/email.js';
import { makeHost } from './helpers/host.js'


let urlInbraep = ''
let urlparceiro = ''
let counter = 1

const walkerInitial = () => {
  inquirer.
    prompt([
      {
        type: 'list',
        name: 'Enviroment',
        message: 'Em qual ambiente o usuário será criado?',
        choices: ['Local', 'Produção']
      }
    ]).then(choice => {
      if (choice.Enviroment === 'Local') {
        urlInbraep = 'http://localhost'
        urlparceiro = 'http://localhost'
        walkerDefaultPort()
      } else if (choice.Enviroment === 'Produção') {
        walkerPartnerDomain()
      }
    })
}
const walkerDefaultPort = () => {
  inquirer.
    prompt([
      {
        name: 'choices',
        message: 'Usar domínios padrões, 8080 para Adm Inbraep e 8081 para Parceiro?',
        type: 'list',
        choices: ['Sim', 'Não']
      }
    ])
    .then(answer => {
      if (answer.choices === 'Sim') {
        urlInbraep = 'http://localhost:8080'
        urlparceiro = 'http://localhost:8081'
        walkerMassCreation()
      } else {
        walkerPortAdmin()
      }
    })
}
const walkerPartnerDomain = () => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'Domain',
        message: 'Qual o domínio do parceiro?: ',
      }
    ])
    .then(answer => {
      urlparceiro = `https://${answer.Domain}.treinamento.online`
      walkerAdminDomain()
    })
}
const walkerAdminDomain = () => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'Domain',
        message: 'Qual o domínio do admin Inbraep?: ',
      }
    ])
    .then(answer => {
      urlInbraep = `https://${answer.Domain}.treinamento.online`
      walkerMassCreation()
    })
}
const walkerPortAdmin = () => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'Port',
        message: 'Qual a porta local para o admin Inbraep?: ',
      }
    ])
    .then(answer => {
      urlInbraep = `${urlInbraep}:${answer.Port}`
      walkerPortPartner()
    })
}

const walkerPortPartner = () => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'Port',
        message: 'Qual a porta local para o parceiro?: ',
      }
    ])
    .then(answer => {
      urlparceiro = `${urlparceiro}:${answer.Port}`
      walkerMassCreation()
      // walkerCreator()
    })
}
const walkerCreator = () => {
  inquirer.
    prompt([
      {
        name: 'choices',
        message: 'Criar usuário para: ',
        type: 'list',
        choices: ['Parceiro', 'Parceiro Cliente PJ', 'Parceiro Cliente PF', 'Cliente Inbraep PF', 'Cliente Inbraep PJ']
      }
    ])
    .then(answers => {
      if (answers.choices === 'Parceiro') {
        for (let i = 0; i < counter; i++) {
          walkerPartner()
        }
      } else if (answers.choices === 'Parceiro Cliente PJ') {
        for (let i = 0; i < counter; i++) {
          walkerClientPartnerPJ()
        }
      } else if (answers.choices === 'Parceiro Cliente PF') {
        for (let i = 0; i < counter; i++) {
          walkerClientPartnerPF()
        }
      } else if (answers.choices === 'Cliente Inbraep PF') {
        for (let i = 0; i < counter; i++) {
          walkerInbraepClientPF()
        }
      } else if (answers.choices === 'Cliente Inbraep PJ') {
        for (let i = 0; i < counter; i++) {
          walkerInbraepClientPJ()
        }
      }
    })
}
const walkerMassCreationCounter = () => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'counter',
        message: 'Quantos pretende criar? (Informe um número razoável para não travar seu PC): ',
      }
    ])
    .then(answer => {
      counter = answer.counter
      walkerCreator()
    })
}
const walkerMassCreation = () => {
  inquirer.
    prompt([
      {
        type: 'list',
        name: 'massRegister',
        message: 'Será cadastro em massa?',
        choices: ['Não', 'Sim']
      }
    ])
    .then(answer => {
      if (answer.massRegister === 'Sim') {
        walkerMassCreationCounter()
      } else {
        walkerCreator()
      }
    })
}
async function walkerPartner() {
  const data = {
    name: getName(),
    cnpj: generateCnpj(),
    cpf: getCPF(),
    phone: generatePhoneNumber(),
    email: generateEmail(),
    brand: makeHost()
  }
  // converte o caminho para um caminho absoluto do arquivo
  const filePath = path.resolve('sample.pdf')

  const url = `${urlInbraep}/cadastro-parceiro`

  console.log('Parceiro criado: ', data)
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto(url);

  await page.setViewport({ width: 1080, height: 1024 });

  await page.waitForSelector('[name=company]');
  await page.type('#company', data.name);
  await page.type('#trade_name', data.name);
  await page.type('#cnpj', data.cnpj);
  await page.type('#pj-cpf', data.cpf);
  await page.type('#responsible', data.name);
  await page.type('#phone', data.phone);
  await page.type('#email', data.email);
  await page.type('#confirm-email', data.email);
  await page.type('#pass', '123123');
  await page.type('#confirmed-password', '123123');
  await page.click('button.btn.bg-blue.pull-right');

  await page.waitForSelector('#company_brand');
  await page.type('#company_brand', data.brand);
  await page.type('#phone_number', data.phone);
  await page.type('#company_email', data.email);
  const [fileChoser] = await Promise.all([
    page.waitForFileChooser(),
    page.click('div.dz-default.dz-message')
  ])

  await fileChoser.accept([filePath])

  await page.type('#cep', '68929516');
  await page.type('#number', '12');
  await page.type('#complement', 'sla mano');
  await page.type('#responsible_c_name', data.name);
  await page.type('#responsible_c_doc', data.cpf);
  await page.type('#responsible_c_email', data.email);
  await page.type('#responsible_c_phone', data.phone);
  await page.type('#responsible_c_whats', data.phone);
  await page.select('#billing_config', 'Sim');
  const xpathSelector = `//button[contains(text(), 'Adicionar')]`;
  await page.waitForXPath(xpathSelector);
  const [button] = await page.$x(xpathSelector);
  if (button) {
    await button.click();
  } else {
    console.error('Elemento não encontrado.');
  }
  await page.click('button.btn.btn-lg.btn-primary');
  // descomenta aqui se quiser fechar o browser depois que faz o parceiro
  // await browser.close();
}

async function walkerClientPartnerPJ() {
  const data = {
    name: getName(),
    cnpj: generateCnpj(),
    cpf: getCPF(),
    phone: generatePhoneNumber(),
    email: generateEmail(),
    brand: makeHost()
  }
  // converte o caminho para um caminho absoluto do arquivo
  const filePath = path.resolve('sample.pdf')
  console.log(filePath)
  const url = `${urlparceiro}/register`
  console.log('Cliente Parceiro PJ criado: ', data)
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto(url);

  await page.setViewport({ width: 1080, height: 1024 });

  const xpath = `//*[contains(text(), 'Pessoa Jurídica')]`;
  await page.waitForXPath(xpath)
  const element = await page.$x(xpath);
  await element[0].click()
  await page.waitForSelector('#company');
  await page.type('#company', data.name);
  await page.type('#trade_name', data.name);
  await page.type('#cnpj', data.cnpj);
  await page.type('#pf-cpf', data.cpf);
  await page.select('#simple_national', 'Sim');
  await page.type('#responsible', data.name);
  await page.type('#phone', data.phone);
  await page.type('#email_nf', data.email);
  await page.type('#email_pf', data.email);
  await page.type('#confirmed-email', data.email);
  await page.type('#password', '123123');
  await page.type('#confirmed-pass', '123123');
  await page.click('#acceptTerm');
  await page.click('button.btn.bg-blue.pull-right');
  // descomenta aqui se quiser fechar o browser depois que faz o parceiro
  // await browser.close();
}

async function walkerClientPartnerPF() {
  const data = {
    name: getName(),
    cnpj: generateCnpj(),
    cpf: getCPF(),
    phone: generatePhoneNumber(),
    email: generateEmail(),
    brand: makeHost()
  }
  // converte o caminho para um caminho absoluto do arquivo
  const filePath = path.resolve('sample.pdf')
  console.log(filePath)
  const url = `${urlparceiro}/register`
  console.log('Cliente Parceiro PF criado: ', data)
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto(url);

  await page.setViewport({ width: 1080, height: 1024 });

  const xpath = `//*[contains(text(), 'Pessoa Física')]`;
  await page.waitForXPath(xpath)
  const element = await page.$x(xpath);
  await element[0].click()
  await page.waitForSelector('#name');
  await page.type('#name', data.name);
  await page.type('#pf-cpf', data.cpf);
  await page.type('#phone', data.phone);
  await page.type('#email_pf', data.email);
  await page.type('#confirmed-email', data.email);
  await page.type('#password', '123123');
  await page.type('#confirmed-pass', '123123');
  await page.click('#acceptTerm');
  await page.click('button.btn.bg-blue.pull-right');
  // descomenta aqui se quiser fechar o browser depois que faz o parceiro
  // await browser.close();
}

async function walkerInbraepClientPF() {
  const data = {
    name: getName(),
    cnpj: generateCnpj(),
    cpf: getCPF(),
    phone: generatePhoneNumber(),
    email: generateEmail(),
    brand: makeHost()
  }
  // converte o caminho para um caminho absoluto do arquivo
  const filePath = path.resolve('sample.pdf')
  console.log(filePath)
  const url = `${urlInbraep}/register`
  console.log('Cliente Inbraep PF criado: ', data)
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto(url);

  await page.setViewport({ width: 1080, height: 1024 });

  const xpath = `//*[contains(text(), 'Pessoa Física')]`;
  await page.waitForXPath(xpath)
  const element = await page.$x(xpath);
  await element[0].click()
  await page.waitForSelector('#name');
  await page.type('#name', data.name);
  await page.type('#pf-cpf', data.cpf);
  await page.type('#phone', data.phone);
  await page.type('#email_pf', data.email);
  await page.type('#confirmed-email', data.email);
  await page.type('#password', '123123');
  await page.type('#confirmed-pass', '123123');
  await page.click('#acceptTerm');
  await page.click('button.btn.bg-blue.pull-right');
  // descomenta aqui se quiser fechar o browser depois que faz o parceiro
  // await browser.close();
}

async function walkerInbraepClientPJ() {
  const data = {
    name: getName(),
    cnpj: generateCnpj(),
    cpf: getCPF(),
    phone: generatePhoneNumber(),
    email: generateEmail(),
    brand: makeHost()
  }
  // converte o caminho para um caminho absoluto do arquivo
  const filePath = path.resolve('sample.pdf')
  console.log(filePath)
  const url = `${urlInbraep}/register`
  console.log('Cliente Inbraep PJ criado: ', data)
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto(url);

  await page.setViewport({ width: 1080, height: 1024 });

  const xpath = `//*[contains(text(), 'Pessoa Jurídica')]`;
  await page.waitForXPath(xpath)
  const element = await page.$x(xpath);
  await element[0].click()
  await page.waitForSelector('#company');
  await page.type('#company', data.name);
  await page.type('#trade_name', data.name);
  await page.type('#cnpj', data.cnpj);
  await page.type('#pf-cpf', data.cpf);
  await page.select('#simple_national', 'Sim');
  await page.type('#responsible', data.name);
  await page.type('#phone', data.phone);
  await page.type('#email_nf', data.email);
  await page.type('#email_pf', data.email);
  await page.type('#confirmed-email', data.email);
  await page.type('#password', '123123');
  await page.type('#confirmed-pass', '123123');
  await page.click('#acceptTerm');
  await page.click('button.btn.bg-blue.pull-right');
  // descomenta aqui se quiser fechar o browser depois que faz o parceiro
  // await browser.close();
}
walkerInitial()
