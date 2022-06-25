package StatePattern;
interface State
{
    void handleTripRequest();
    void handlePaymentRequest();
    void handleDriverCancellation();
    void handleCustomerCancellation();
    void completeTrip(); // Driver completes trip, Unassign the driver.
    void endTrip(); // After driver is unassigned, do driver & customer rating, take feedback etc. 
}