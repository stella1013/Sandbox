interface Subscribable {
    subscribe:(subItemcampaign:SubScriber)=>void;
}
interface Publishable {
    publish:(campaignName:string)=>void;
}
interface Unsubscribable {
    unsubscribe:(subscribee:SubScriber)=>void;
}
type CampaignType = {
    nameOfCampaing:string;
    numberOfRuns:number;
}

type SubScriber ={
    interestedInCampaign:string;
    message:string;
    handler:(interestedInCampaign:string, message:string)=>void;
}

export class EventTracker implements Subscribable, Publishable, Unsubscribable{
    private _howManyTimesCampaignHasRun:Set<CampaignType> = new Set();
    private _subscriptionList:Set<SubScriber> = new Set();
    constructor(){

    }
    unsubscribe(subscriber: SubScriber): void{
        this._subscriptionList.forEach(sub => {
            if(sub === subscriber){
                this._subscriptionList.delete(sub);
            }
        });
    }
    getNumberOfSubscriptions():number{
        return this._subscriptionList.size;
    }
    getSubscriptionList():Set<SubScriber>{
        return this._subscriptionList;
    }
    subscribe(campaign:SubScriber):void {
        this._subscriptionList.add(campaign);
       
    }
    publish(campaignName:string):void{
        this._subscriptionList.forEach(str => 
            str.interestedInCampaign === campaignName && str.handler);
    }
}