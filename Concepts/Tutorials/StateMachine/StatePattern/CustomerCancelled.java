package StatePattern;
class CustomerCancelled implements State {
 
    UberTrip context;
 
    public CustomerCancelled(UberTrip ctx) {
      this.context = ctx;
    }
 
    @Override
    void handleTripRequest() {
     System.out.println("Customer Cancelled state does not handle trip initiation request.");
    }
 
    @Override
    void handlePaymentRequest() {
     System.out.println("Customer Cancelled state does not handle payment request.");
    }
    
    @Override
    void handleDriverCancellation() {
     System.out.println("Customer Cancelled state does not handle driver cancellation.");
    }
    
    @Override
    void handleCustomerCancellation() {
      context.setState(context.getDriverUnassignedState()); // If customer cancels, umassign the driver & related stuffs.
    }
    
    @Override
    void completeTrip() {
     System.out.println("Customer Cancelled state does not handle trip completion.");
    }
    
    @Override
    void endTrip() {
     System.out.println("Customer Cancelled state does not handle ending trip.");
    }
}