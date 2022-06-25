package StatePattern;
class DriverAssigned implements State {
 
    UberTrip context;
 
    public DriverAssigned(UberTrip ctx) {
      this.context = ctx;
    }
 
    @Override
    void handleTripRequest() {
     System.out.println("Driver Assigned state does not handle trip initiation request.");
    }
 
    @Override
    void handlePaymentRequest() {
     System.out.println("Driver Assigned state does not handle payment request.");
    }
    
    @Override
    void handleDriverCancellation() {
     context.setState(context.getTripRequestedState()); // If driver cancels, go back to trip requested state & try again.
    }
    
    @Override
    void handleCustomerCancellation() {
      System.out.println("Driver Assigned state does not handle customer cancellation.");
    }
    
    @Override
    void completeTrip() {
     context.setState(context.getDriverUnAssignedState()); // Call driver unassigned state
    }
    
    @Override
    void endTrip() {
     System.out.println("Driver Assigned state does not handle ending trip.");
    }
}