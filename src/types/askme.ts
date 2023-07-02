export interface AskMe {
  title: string;
  subTitle: string;
  actionType: ActionType[];
}

export interface ActionType {
  type: string;
  to: string;
  subject?: string;
}
