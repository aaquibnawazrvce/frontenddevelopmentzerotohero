let nameme:string ='Shabnaz';
console.log('Name is');
console.log(nameme);
let countme:number=20.5;
console.log('The value of numeric variable is:'+ countme);
let statusv:boolean = false;
console.log('Flag is:'+ statusv);
let payments: number[] =[45222,50000,40000];
console.log('Payments Array');
console.log(payments); 
const WALLETGPAY = 'Google Pay';
const WALLETPHONEPAY ='Phone Pay';
const PAYTM ='Pay TM';
const AMAZONPAY='Amazon Pay';
enum WALLETS  {GooglePay='Google Pay',PhonePay='Phone Pay',PayTM= 'PayTM',
AmazonPay='AmazonPay'};
console.log('Wallets for Enum');
console.log(WALLETS);
let selectedWallet = WALLETS.AmazonPay;
console.log('Selected Wallet is:'+selectedWallet);
