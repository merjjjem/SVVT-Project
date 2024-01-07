import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class AsosPage extends BasePage {
    
    constructor(driver: WebDriver) {
        super(driver);
    }
    

    private userIcon = By.xpath("//div[@id='myAccountDropdown']");
    private joinBtn = By.xpath("//a[@data-testid='signup-link']");
    private joinEmail = By.xpath("//input[@id='Email']");
    private firstName = By.xpath("//input[@id='FirstName']");
    private lastName=By.xpath("//input[@id='LastName']");
    private joinPassword= By.xpath("//input[@id='Password']");
    private birthDay = By.xpath("//select[@id='BirthDay']/option[@value='3']");
    private birthMonth = By.xpath("//select[@id='BirthMonth']/option[@value='1']");
    private birthYear = By.xpath("//select[@id='BirthYear']/option[@value='2002']");
    private joinAsosButton = By.xpath("//input[@id='register']");

   
    private signInBtn=By.xpath("//a[@data-testid='signin-link']");
    private signInEmail=By.xpath("//input[@name='Username']");
    private signInPasswordd= By.xpath("//input[@id='Password' and @type='password']");
    private signInAsos= By.xpath("//input[@id='signin' and @type='submit']");
    



    private searchAsos = By.xpath("//input[@data-testid='search-input']");

    private searchAsosBtn = By.xpath("//button[@data-testid='search-button-inline']");

    private asosItem = By.xpath("//article[@id='product-204254009']");   //promjeniti id ako ne radi test za drugi artikal id
    private wishlistBtn = By.xpath ("//button[@data-testid='saveForLater']");


    private sizeCheck=By.xpath("//select[@id='variantSelector']/option[@data-testid='size-0']");


    private sortBtn=By.xpath("//li[@data-auto-id='sort']");
    private newInBtn= By.xpath("//li[@id='plp_web_sort_whats_new']");
    
    private addToCartBtn = By.xpath("//button[@data-testid='add-button']");

    private returnsInfo = By.xpath ("//a[@data-testid='returnsinformation-link']")

    private orderIssues = By.xpath("//a [@href='/customer-care/order-issues/']");

    private asosDelivery = By.xpath("//a [@href='/customer-care/delivery/']");  
    
    private returnsRefunds=By.xpath("//a[@href='/customer-care/returns-refunds/']"); 
    


    async ClickUserIcon(){
       
        await this.findElementAndClick(this.userIcon);
    }

    async clickJoinbtn(){
        await this.driver.sleep(3000);
        await this.waitAndClick(this.joinBtn, 5000);
    }

    async provideEmail(){
        await this.fillInputField(this.joinEmail, testData.data.email);
    }

    async provideName(){
        await this.fillInputField(this.firstName, testData.data.firstName);
    }

    async provideLastName(){
        await this.fillInputField(this.lastName, testData.data.lastName);
    }

    async providePassword(){
        await this.fillInputField(this.joinPassword, testData.data.password);
    }

    async clickDaySelect(){
        await this.waitAndClick(this.birthDay, 5000);
    }

      
     async clickMonthSelect(){
        await this.waitAndClick(this.birthMonth, 5000);
     }

     async clickYearSelect(){
        await this.waitAndClick(this.birthYear, 5000);
     }

     async clickJoinAsosbtn(){
        await this.waitAndClick(this.joinAsosButton, 110000);
     }

     async clickSigninbtn(){
        await this.driver.sleep(3000);
        await this.waitAndClick(this.signInBtn,5000);
     }

     async providEmaill(){

        await this.fillInputField(this.signInEmail, testData.dataLogin.email);
     }

     async providePasswordd(){
        await this.fillInputField(this.signInPasswordd, testData.dataLogin.password);
    }

    async ClickSigninAsos(){
        await this.findElementAndClick(this.signInAsos);
    }
         

    async searchInput(){
        await this.fillInputField(this.searchAsos, testData.search.item);
    }

    async clickSearchbtn(){
        await this.waitAndClick(this.searchAsosBtn, 5000);
    }

    async clickItem(){
        await this.waitAndClick(this.asosItem, 5000);
    }


    async clickWishlistbtm(){


        await this.waitAndClick(this.wishlistBtn, 20000);
    }

    async clickSizeSelect(){

        await this.waitAndClick(this.sizeCheck, 5000);
    }


    async clickSortbtn(){

        await this.waitAndClick(this.sortBtn,5000);
    }

    async clickNewinbtn(){

        await this.waitAndClick(this.newInBtn,20000);
    }


    async clickAddToCart(){


        await this.waitAndClick(this.addToCartBtn, 20000);
    }

    async clickReturnsInformations(){
        await this.driver.sleep(3000);
        await this.waitAndClick(this.returnsInfo,5000);
     }



     async clickOrderIssues(){


        await this.waitAndClick(this.orderIssues,5000);
     }



     async clickDelivery(){


        await this.waitAndClick(this.asosDelivery,5000);
     }

     async clickReturnsAndRefunds(){


        await this.waitAndClick(this.returnsRefunds,5000);
     }


 
 
    
}