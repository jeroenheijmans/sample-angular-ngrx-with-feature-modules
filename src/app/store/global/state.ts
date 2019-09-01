export type Themes = 'standard' | 'comic' | 'print';

interface StyleState {
  theme: Themes;
  screaming: boolean;
}

export interface GlobalState {
  style: StyleState;
  loggedIn: boolean;
}
