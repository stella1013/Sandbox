package StatePattern;
class TripRequested implements State {
 
    UberTrip context;
    
     public TripRequested(UberTrip ctx) {
      this.context = ctx;
     }
     
    @Override
    void handleTripRequest() {
      if(!context.tripStarted()) {
       context.setState(context.getPaymentRequestedState());
     }
    }
    
      @Override
       void handlePaymentRequest() {
        System.out.println("This state just handles initiation of trip request, it does not handle payment");
       }
       
       @Override
       void handleDriverCancellation() {
        System.out.println("This state just handles initiation of trip request, it does not handle cancellation");
       }
       
       @Override
       void handleCustomerCancellation() {
        System.out.println("This state just handles initiation of trip request, it does not handle cancellation");
       }
       
       @Override
       void completeTrip() {
        System.out.println("This state just handles initiation of trip request, it does not handle trip completion");
       }
       
        @Override
       void endTrip() {
        System.out.println("This state just handles initiation of trip request, it does not handle ending trip.");
       }
   }