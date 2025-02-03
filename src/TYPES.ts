// Global app store types
export interface appStoreTypes {
  appTheme: string;
  setAppTheme: (value: string) => void;
  isPasswordValid: boolean;
  setIsPasswordValid: (value: boolean) => void;
  prompt: string;
  setPrompt: (value: string) => void;
  chatbot: string;
  setChatbot: (value: string) => void;
  isSidebarActive: boolean;
  setIsSidebarActive: (value: boolean) => void;
  isMobileSidebarActive: boolean;
  setIsMobileSidebarActive: (value: boolean) => void;
}

// user types
export interface UserSchemaTypes {
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
  isVerified: boolean;
  bio: string;
  resetPasswordToken?: string;
  resetPasswordTokenExpires?: Date;
  verificationCode?: string;
  verificationCodeExpires?: Date;
  accessToken?: string;
  accessTokenExpires?: Date;
  refreshToken?: string;
  refreshTokenExpires?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  chats?: {
    id: string;
    title: string;
    conversations: {
      chatsession: {
        id: string;
        user: string;
        bot: string;
      };
    }[];
  }[];
  preferences?: {
    avatarUrl: string;
    theme: "light" | "dark";
  };
}

// Response types
export interface newAuthResponseTypes {
  message: string;
}

// Global user types
export interface userStoreTypes {
  prefersTheme: string;
  isLoading: boolean;
  error: string;
  message: string;
  setIsLoading: (value: boolean) => void;
  user: UserSchemaTypes | null;
  email: string;
  setUser: (value: UserSchemaTypes | null) => void;
  setprefersTheme: (value: string) => void;
  signUp: (username: string, password: string, email: string) => void;
  verifyEmailWithCode: (code: string) => void;
  verifyEmailWithLink: (token: string) => void;
  resendVerificationCode: (email: string) => void;
  logIn: (username: string, password: string) => void;
  sendPasswordResetRequest: (email: string) => void;
  resetPassword: (password: string, token: string) => void;
}
