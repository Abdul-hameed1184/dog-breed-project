import FinanceGrid from "../components/FinanceGrid";

const Finance = () => {
  return (
    <div className="finance">
      <div className="route">you are here : finances</div>
      <div className="cover">
        <img src="src/assets/images/finance1.jpg" alt="" />
      </div>
      <div className="finance-body">
        <h1>FRENCH BULDOG FINANCE</h1>
        <h6>powered by TERRACE FINANCE</h6>
        <p className="pay">PET PAYMENT SOLUTION FOR AMOUNTS UP TO $15,000*</p>
        <ul>
          <li> One application. Multiple lenders* </li>
          <li>All credit profiles considered** </li>
          <li>No application fee </li>
          <li>Good for pets, pet products, and pet service</li>
        </ul>
        <h1>HOW IT WORKS</h1>
        <div className="semi">
          <div className="semi-section">
            <h1>APPLY</h1>
            <p>
              Start the application by hovering your phone camera over the QR
              code and following the link.
            </p>
          </div>
          <div className="semi-section">
            <h1>GET MATCHED</h1>
            <p>
              We will be working in trying to match you with a lender within our
              network based on the information provided on the application. and
              your credit profile.
            </p>
          </div>
          <div className="semi-section">
            <h1>FINALIZE</h1>
            <p>
              Once you agree to the lender terms, we process your request, and
              you get to go home with your furry friend. It is as easy as 1-2-3!
            </p>
          </div>
        </div>
        <div className="qr">
          <img src="src/assets/images/finance qr.jpg" alt="" />
        </div>
        <p>
          * Terrace Pets powered by Terrace Finance is not a lender but
          represents a range of lenders/lessors. Available programs and
          financing amounts vary by state. **Approval is subject to credit
          eligibility and not guaranteed. Must be at least 18 years old to
          apply.
        </p>
      </div>

      <FinanceGrid />
    </div>
  );
};

export default Finance;
