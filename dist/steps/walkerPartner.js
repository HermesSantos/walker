import puppeteer from "puppeteer";
import path from "path";
import { getName } from "../helpers/name.js";
import { generateCnpj } from "../helpers/cnpj.js";
import { getCPF } from "../helpers/cpf.js";
import { generatePhoneNumber } from "../helpers/phone.js";
import { generateEmail } from "../helpers/email.js";
import { makeHost } from "../helpers/host.js";
import { getOs } from "../helpers/os.js";
export const walkerPartner = async (urlInbraep) => {
    const partnerName = getName();
    const data = {
        name: partnerName,
        cnpj: generateCnpj(),
        cpf: getCPF(),
        email: generateEmail(partnerName),
        phone: generatePhoneNumber(),
        brand: makeHost(),
    };
    data.email = generateEmail(data.name);
    const filePath = path.resolve("sample.pdf");
    const url = `${urlInbraep}/cadastro-parceiro`;
    console.log("Parceiro criado: ", data);
    const browser = await puppeteer.launch({
        executablePath: getOs(),
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1080, height: 1024 });
    await page.waitForSelector("[name=company]");
    await page.type("#company", data.name);
    await page.type("#trade_name", data.name);
    await page.type("#cnpj", data.cnpj);
    await page.type("#pj-cpf", data.cpf);
    await page.type("#responsible", data.name);
    await page.type("#phone", data.phone);
    await page.type("#email", data.email);
    await page.type("#confirm-email", data.email);
    await page.type("#pass", "123123");
    await page.type("#confirmed-password", "123123");
    await page.click("button.btn.bg-blue.pull-right");
    await page.waitForSelector("#company");
    await page.type("#company", data.brand);
    await page.type("#phone", data.phone);
    await page.type("#email", data.email);
    const [fileChoser] = await Promise.all([
        page.waitForFileChooser(),
        page
            .waitForSelector("div.dz-default.dz-message", { visible: true })
            .then(() => {
            return page.click("div.dz-default.dz-message");
        }),
    ]);
    await page.type("#company_brand", "localhost");
    await page.type("#phoneNumberPartner", data.phone);
    await page.type("#company_email", data.email);
    await fileChoser.accept([filePath]);
    await page.type("#cep", "68929516");
    await page.type("#number", "12");
    await page.type("#complement", "sla mano");
    await page.type("#responsible_c_name", data.name);
    await page.type("#responsible_c_doc", data.cpf);
    await page.type("#responsible_c_email", data.email);
    await page.type("#responsible_c_phone", data.phone);
    await page.type("#responsible_c_whats", data.phone);
    const xpathSelector = "//button[contains(text(), 'Adicionar')]";
    await page.waitForXPath(xpathSelector);
    const [button] = await page.$x(xpathSelector);
    if (button) {
        const element = button;
        await element.click();
    }
    else {
        console.error("Elemento não encontrado.");
    }
    await page.click("button.btn.btn-lg.btn-primary");
};
