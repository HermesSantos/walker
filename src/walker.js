import puppeteer from 'puppeteer';
import { getName } from './helpers/name.js';
import { generateCnpj } from './helpers/cnpj.js';
import { getCPF } from './helpers/cpf.js';
import { generatePhoneNumber } from './helpers/phone.js';
import { generateEmail } from './helpers/email.js';
import { makeHost } from './helpers/host.js'

(async () => {
  const data = {
    name: getName(),
    cnpj: generateCnpj(),
    cpf: getCPF(),
    phone: generatePhoneNumber(),
    email: generateEmail(),
    brand: makeHost()
  }
  console.log('Empresa criada: ', data)
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto('http://localhost:8080/cadastro-parceiro');

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

  // *************************************************
  await fileChoser.accept(['C:\\Users\\ichig\\Downloads\\nota_fiscal_03_11.pdf'])
  // *************************************************

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
})();
