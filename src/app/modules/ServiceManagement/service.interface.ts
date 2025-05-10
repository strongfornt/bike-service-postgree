export interface IServicePayload {
  bikeId: string;
  serviceDate: Date;
  description: string;
  status: "pending" | "in_progress" | "done";
}
