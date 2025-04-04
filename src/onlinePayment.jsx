import "./onlinePayment.css";

function OnlinePayment(){
    return(
        <div className="online-payment">
            <h2>Online Payment</h2>
            <h3>Convenient, Safe and Cashless!</h3>
            <p>You can now make all your payments to school conveniently while safe at home and even more.</p>
       <h3>How Can I Make Payments?</h3>
       <div className="online-payment-step">
       <span>STEP 1</span>
       <p>You will receive the invoice payment link through Message/Email – Click on “ Pay Now”</p>
     <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/1/amended-invoice.png"/>
      </div> 
      <div className="online-payment-step">
        <span>STEP 2</span>
        <p>Choose one of two options to Pay the amount – “Pay with Credit card OR Pay with installments”</p>
        <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_files-and-documents/online-payment/online-payment/online-payment-3.png"/>

      </div>
      <div className="online-payment-step">
        <span>STEP 3</span>
        <p>If you choose “Pay with Credit Card” – just enter your credit card details to make a payment.

You will receive a confirmation message that the payment has been successfully completed</p>
        <img src="https://www.gis-cairo.com/-/media/project/gems/bism_gems_british_international_school_madinaty_cairo/_files-and-documents/online-payment/online-payment/step_03.png"/>

      </div>
      <div className="online-payment-step">
        <span>STEP 4</span>
        <p>Enter your credit card details and submit your payment.</p>
        <img src="https://www.gis-cairo.com/-/media/project/gems/bism_gems_british_international_school_madinaty_cairo/_files-and-documents/online-payment/step_07.png"/>

      </div>
      <div className="online-payment-info">
        
            <span>1. Online payments terms and conditions:</span>
            <ul>
                <li>Any dispute or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of Egypt.</li> <br/>
                <li>Egypt is our country of domicile.</li>
                <li>Minors under the age of 18 shall be prohibited to register as a User of this website and are not allowed to transact or use the website.</li><br/>
                <li>f you make a payment for our services on our website, the details you are asked to submit will be provided directly to our payment provider via a secured connection.</li><br/>
                <li>We accept payments online using Visa and MasterCard credit/debit card in EGP.</li><br/>
        </ul>
        <span>2. Delivery/Shipment Policy:</span>
        <ul>
            <li>GISC will NOT deal or provide any services or products to any of OFAC (Office of Foreign Assets Control) sanctions countries in accordance with the law of Egypt.</li><br/>
            <li>Multiple transactions may result in multiple postings to the cardholder’s monthly statement.</li><br/>
        </ul>
        <span>3. Refund & Cancellation Policy:</span>
        <ul>
            <li>Refunds will be done only through the Original Mode of Payment.</li>
        </ul>
      </div>

       </div>
    )
}
export default OnlinePayment;