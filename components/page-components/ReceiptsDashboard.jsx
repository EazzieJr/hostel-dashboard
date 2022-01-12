import PaymentReceipt from "../PaymentReceipt";
import CardSection from "../CardSection";
const PaymentDashboard = () =>{
    return(
        <div className="flex">
            <CardSection/>
            <PaymentReceipt/>
        </div>

    )
}

export default PaymentDashboard;