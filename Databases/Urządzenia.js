const { execFile } = require("child_process");
const { debug, Console } = require("console");
const puppeteer = require("puppeteer");
const { setTimeout } = require("timers/promises");
const { threadId } = require("worker_threads");
let nQuestion = []; //class onequestion [num-1]
let question = []; // class tresc [num-1]
let answera = []; // id odpa [num-1], odpb [num], odpc [num+1], odpd [num+2]
let answerb = []; // id odpa [num-1], odpb [num], odpc [num+1], odpd [num+2]
let answerc = []; // id odpa [num-1], odpb [num], odpc [num+1], odpd [num+2]
let answerd = []; // id odpa [num-1], odpb [num], odpc [num+1], odpd [num+2]
let gAnswer = []; // class odpgood [num-1]
let graphic = []; //class obrazek [num-1]
var XLSX = require("xlsx");
//import * as XLSX from 'xlsx/xlsx.mjs';
//
///* load 'fs' for readFile and writeFile support */
//import * as fs from 'fs';
//XLSX.set_fs(fs);
//
///* load 'stream' for stream support */
//import { Readable } from 'stream';
//XLSX.stream.set_readable(Readable);
//
///* load the codepage support library for extended support with older formats  */
//import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
//XLSX.set_cptable(cpexcel);
let wszystkiepytania = 0;


(async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 250});
    const page = await browser.newPage();
    await page.goto("https://egzamin-informatyk.pl/jedno-pytanie-sprzet-urzadzenia-peryferyjne/");

        //?for(let i = 0; i <= 10000; i++){
        //    await console.log(i);
        //}await console.clear();
        

            var excel = require('excel4node');
            var workbook = new excel.Workbook();
            var worksheet = workbook.addWorksheet('UTK');
            //!worksheet.cell(1,1).number(102);
            for(let pastus = 0; wszystkiepytania <= 647; pastus++){
            workbook.write('BazaPytanU.xlsx'); //tworzy/nadpisuje arkusz o tej nazwie

        const nQuest = await page.evaluate(() =>{
            const pgTag = document.querySelector('h3');
            //pytanie = document.getElementsByClassName('tresc')[0].innerText;
            return pgTag.innerText;
        });let nQuest1 = nQuest.replace('Pytanie nr ', '');let nQuest2 = nQuest1.replace(' - Wskaż poprawną odpowiedź!', '');var num = parseInt(nQuest2);
        const Quest = await page.evaluate(() =>{
            const pytanie = document.getElementsByClassName('tresc')[0];
            //document.getElementById('odpa').onclick();
            return pytanie.innerText;
        });
        const OdpowiedzA = await page.evaluate(() =>{
            const odpa = document.getElementById('odpa');
            return odpa.innerText;
        });
        const OdpowiedzB = await page.evaluate(() =>{
            const odpb = document.getElementById('odpb');
            return odpb.innerText;
        });
        const OdpowiedzC = await page.evaluate(() =>{
            const odpc = document.getElementById('odpc');
            return odpc.innerText;
        });
        const OdpowiedzD = await page.evaluate(() =>{
            const odpd = document.getElementById('odpd');
            return odpd.innerText;
        });
        const Obraz = await page.evaluate(() =>{
            if(document.getElementsByClassName('img-responsive').length == 0){
            }else{
                const zdjecie = document.getElementsByClassName('img-responsive')[0].getAttribute('src').replace('../', 'https://egzamin-informatyk.pl/');
                return zdjecie;
            }
        })
        const Click = await page.evaluate(() =>{
            document.getElementById('odpa').click();
            for(let i = 0; i <= 10000; i++){
            console.log(i);
            }
            return document.getElementById('odpa').click();
        });
        

        

        const DobraOdp = await page.evaluate(() =>{
            //document.getElementById('odpa').click();
            const odpG = document.getElementsByClassName('odpgood')[0];
            return odpG.innerText;
        });

        const ClickNewQ = await page.evaluate(() =>{
            for(let k = 0; k <= 10000; k++){
            console.log(k);
            }
            for(let k = 0; k <= 10000; k++){
            console.log(k);
            }
            return document.getElementById('losujnowe').click();
        });
        const czk = await page.evaluate(() =>{
            for(let i = 0; i <= 10000; i++){
            console.log(i);
            }
            return i;
        });


        if(nQuestion[num-1] == undefined){
            nQuestion[num-1] = num;
            worksheet.cell(num, 1).number(nQuestion[num-1]); //.string
            question[num-1] = Quest;
            worksheet.cell(num, 2).string(question[num-1]);

            answera[num-1] = OdpowiedzA;
            worksheet.cell(num, 3).string(answera[num-1].replace('A. ', ''));

            answerb[num-1] = OdpowiedzB;
            worksheet.cell(num, 4).string(answerb[num-1].replace('B. ', ''));

            answerc[num-1] = OdpowiedzC;
            worksheet.cell(num, 5).string(answerc[num-1].replace('C. ', ''));

            answerd[num-1] = OdpowiedzD;
            worksheet.cell(num, 6).string(answerd[num-1].replace('D. ', ''));

            if(Obraz != undefined){
                graphic[num-1] = Obraz;
                worksheet.cell(num, 8).string(graphic[num-1]);
            }
            Click;
            if(OdpowiedzA == DobraOdp){
                gAnswer[num-1] = DobraOdp.replace('A. ', '');
            }else if(OdpowiedzB == DobraOdp){
                gAnswer[num-1] = DobraOdp.replace('B. ', '');
            }else if(OdpowiedzC == DobraOdp){
                gAnswer[num-1] = DobraOdp.replace('C. ', '');
            }else{
                gAnswer[num-1] = DobraOdp.replace('D. ', '');
            }
            //gAnswer[num-1] = DobraOdp;
            worksheet.cell(num, 7).string(gAnswer[num-1]);
        }workbook.write('BazaPytanU.xlsx');

        console.log(nQuestion[num-1]);
        console.log(question[num-1]);
        console.log(answera[num-1]);
        console.log(answerb[num-1]);
        console.log(answerc[num-1]);
        console.log(answerd[num-1]);
        console.log(gAnswer[num-1]);
        if(Obraz != undefined){
            console.log(graphic[num-1]);
        }
        //console.log(graphic[num-1]); //!if
        ClickNewQ;
        //
        czk;
        for(let i = 0; i <= 647; i++){
            if(nQuestion[i] != undefined){
                wszystkiepytania = wszystkiepytania + 1;
                console.log("Było");
        }else{
            wszystkiepytania = 0;
            console.log("AH NIECH TO: " + i);
            break;
        }
    }
}
    browser.close();
    
})();