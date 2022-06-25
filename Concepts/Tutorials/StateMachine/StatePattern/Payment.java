package StatePattern;
class Payment implements State {
 
    UberTrip context;
     
    public PaymentRequested(UberTrip ctx) {
     this.context = ctx;
    }
    
      @Override
      void handleTripRequest() {
     System.out.println("Payment state does not handle trip initiation request.");
      }
     
    @Override
    void handlePaymentRequest() {
      Payment payment = doPayment();
     
      if(payment.isSuccess()) {
       context.setState(context.getDriverAssignedState()); // Call driver assigned state.
      } else {
       context.setState(context.getTripRequestedState()); // Call trip requested state
      }
       }
       
       @Override
       void handleDriverCancellation() {
        System.out.println("Payment state just handles payment, it does not handle cancellation");
       }
       
       @Override
       void handleCustomerCancellation() {
        System.out.println("Payment state just handles payment, it does not handle cancellation");
       }
       
       @Override
       void completeTrip() {
        System.out.println("Payment state just handles payment, it does not handle trip completion");
       }
       
       @Override
       void endTrip() {
        System.out.println("Payment state just handles payment, it does not handle ending trip.");
       }
   }
   