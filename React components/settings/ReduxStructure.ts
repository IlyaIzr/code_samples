// Набросок для команды

type userGender = 'male' | 'female';

export type User = {
  settings: {
    isLogged: boolean;
    isVip: boolean;
    userCart: Array<string>;
  };
  userData: {
    userId: string;
    userName: {
      firstName: string;
      lastName: string;
      middleName: string;
    };
    userGender: userGender;
  };
  userFullData: {
    userAvatar: string; 
    userAge: number;
    userLocation: string;
    userPictures: Array<string>;
    userFieldOfExpertise: string;
    userJob: string;
    usetAboutInfo?: string;
    userTags: Array<string>;
    userEvents?: Array<Event>;
    userVacantDates?: Array<Date>;
  };
};

export type Event = {
  eventId: string;
  eventDate: number | string | Date;
  eventLocation: string | [number, number];
  eventLocationName?: string;
  eventTheme?: string;
  eventQuestions: Array<string>;
  eventPresent?: string;
};

export type SearchResult = {
  searchResult: {
    avatar: string;
    name: string;
    age: number;
    location: string;
    fieldOfExpertise: string;
    description: string;
    tags: Array<string>;
  };
};
export type SearchResults = {
  searchResults: Array<SearchResult>;
};

export type Match = {
  matchId: string;
  matchUsers: Array<{
    userId: string;
    userFirstName: string;
    userAvatar: string;
    userGender: userGender;
  }>;
};

export type GlobalInfo = {
  numberRegisteredPeople: 0;
  numberOnlinePeoples: 0;
  partnersCompany: Array<{
    companyImage: string;
    companyName: string;
  }>;
};
