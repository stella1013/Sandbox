export type CampaignType = {
	nameOfCampaing: string;
	numberOfRuns: number;
};

export type SubScriber = {
	interestedInCampaign: string;
	message: string;
	handler: (interestedInCampaign: string, message: string) => any;
};