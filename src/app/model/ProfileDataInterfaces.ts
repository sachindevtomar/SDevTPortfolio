export interface Data {
    FullName : String;
    FirstName : String;
    CurrentRole : String;
    ProfilePicURL: String;
    SecondaryPicURL: String;
    Expertise: String[];
    SocialMediaLinks:String[];
    MobileNumbers:String[];
    WorkStarted: String;
    Interests: String[];
    Intro: Intro;
    NumberTiles: NumberTile[];
    WorkExperiences: WorkExperience[];
    Educations: Education[];
    Projects: Project[];
    Skills: Skill[];
    Certifications: Certification[];
}

export interface Intro {
    Short:String;
    Long:String;
    Graduation:String;
    Hometown:String;
    State:String;
    EmailId:String;
    DOB: String;
}

export interface NumberTile {
    Name:String;
    Count:Number;
    FontAwesomeClass:String;
}

export interface WorkExperience {
    CompanyName:String;
    Location:String;
    LogoUrl:String;
    OrderInUI: Number,
    MoreInfos: MoreInfo[];
}

export interface Education {
    InstituteName:String;
    Location:String;
    Board:String;
    CourseName:String;
    StartDate:String;
    EndDate:String;
    Stream:String;
    Percentile:String;
}

export interface Project {
    Title:String;
    Description:String;
    Technologies:String[];
    RepoLink:String;
    StartDate:String;
    EndDate:String;
    HostLink:String;
    FontAwesomeClass:String;
    ProjectType: String;
}

export interface MoreInfo {
    Position:String;
    StartDate:String;
    EndDate:String;
    Responsibilities: String[];
}

export interface Skill {
    Name: String;
    TotalLevel: number;
    MyLevel: number;
    LogoURL: String;
}

export interface Certification {
    Name: String;
    Company: String;
    IssuedDate: String;
    VerificationLink: String;
    LogoURL: String;
}