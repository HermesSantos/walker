import path from 'path'
import puppeteer from 'puppeteer';

import { getName } from '../helpers/name.js';
import { generateCnpj } from '../helpers/cnpj.js';
import { getCPF } from '../helpers/cpf.js';
import { generatePhoneNumber } from '../helpers/phone.js';
import { generateEmail } from '../helpers/email.js';
import { makeHost } from '../helpers/host.js';
import {getOs} from "../helpers/os.js";

export const walkerInbraepClientPF = async (urlInbraep, urlparceiro) => {
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
  const url = `${urlInbraep}/register`
  console.log('Cliente Inbraep PF criado: ', data)
  const browser = await puppeteer.launch({
    executablePath: getOs(),
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
