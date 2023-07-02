export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  role: RoleType;
}

export type RoleType = 'super_store' | 'store';
