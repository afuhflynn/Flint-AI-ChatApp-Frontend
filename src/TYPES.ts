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

// Global user types
export interface userStoreTypes {
  prefersTheme: string;
  user: UserSchemaTypes | null;
  setprefersTheme: (value: string) => void;
}
