package StatePattern;
class UberTrip {
    State tripRequestedState;
    State paymentState;
    State driverAssignedState;
    State driverUnassignedState;
    State customerCancelledState;
    
    // CurrentState
    State state;
    
    public UberTrip() {
     tripRequestedState = new TripRequested(this);
     paymentState = new Payment(this);
     driverAssignedState = new DriverAssigned(this);
     driverUnassignedState = new DriverUnAssigned(this);
     customerCancelledState = new CustomerCancelled(this);
    }
    
    public setState(State st) {
     this.state = st;
    }
    
    public getState() {
     return this.state;
    } 
    
    public void requestTrip() {
     state.handleTripRequest();
    }
    
    public void doPayment() {
     state.handlePaymentRequest();
    }
    
    public void driverCancelled() {
     state.handleDriverCancellation();
    }
    
    public void customerCancelled() {
     state.handleCustomerCancellation();
    }
    
    public void completeTrip() {
     state.completeTrip();
    }
   }