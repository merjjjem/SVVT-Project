import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";

import { readFileSync } from "fs";
import * as path from "path";
import { AsosPage } from "../core/page-objects/asos-home";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage : AsosPage;


beforeAll(async () => {
    const startTime = performance.now();
    driver = await createDriver(testData.url.home_page);
    const endTime = performance.now();
    const elapsedMilliseconds = endTime - startTime;
    console.log('Elapsed Time:', elapsedMilliseconds);
    //driver = await createDriver(testData.url.home_page);
    homePage = new AsosPage(driver);
},10000);


test("searchAsos", async () => {
  await homePage.searchInput();
  await homePage.clickSearchbtn();
},40000);


test("wishlistAdd", async () => {
  await homePage.searchInput();
  await homePage.clickSearchbtn();
  await homePage.clickItem();
  await homePage.clickWishlistbtm();
},40000);


test ("sizeCheck" ,async () =>  {

  await homePage.searchInput();
  await homePage.clickSearchbtn();
  await homePage.clickItem();
  await homePage.clickSizeSelect();
}, 20000);


test ("sortItem",async () => {

  await homePage.searchInput();
  await homePage.clickSearchbtn();
  await homePage.clickSortbtn();
  await homePage.clickNewinbtn();
},25000);

test ("addToCart",async () => {

  await homePage.searchInput();
  await homePage.clickSearchbtn();
  await homePage.clickItem();
  await homePage.clickAddToCart();
}, 5000);

test("returnsInformation",async () => {

   await homePage.ClickUserIcon();
   await homePage.clickReturnsInformations();
}, 7000);

test("orderIssues",async () => {

  await homePage.clickOrderIssues();
  
}, 5000);


test("asosDelivery",async () => {

  await homePage.clickDelivery();
  
}, 5000);


test("ReturnsAndRefunds",async () => {

  await homePage.clickReturnsAndRefunds();
  
}, 5000);



/*
test("joinAsos", async () => {
  await homePage.ClickUserIcon();
  
  await homePage.clickJoinbtn();
  await homePage.provideEmail();
  await homePage.provideName();
  await homePage.provideLastName();
  await homePage.providePassword();
  await homePage.clickDaySelect();
  await homePage.clickMonthSelect();
  await homePage.clickYearSelect();
  await homePage.clickJoinAsosbtn();
},110000);
*/

/*
test("signInAsos", async () => {


  await homePage.ClickUserIcon();
  await homePage.clickSigninbtn();
  await homePage.providEmaill();
  await homePage.providePasswordd();
  await homePage.ClickSigninAsos();

},40000);
*/

afterAll(async () => {
    await quitDriver(driver);
},20000);

