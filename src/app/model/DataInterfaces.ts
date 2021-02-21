export interface Data {
    FullName : String;
    FirstName : String;
    CurrentRole : String;
    ProfilePicURL: String;
    Expertise: String[];
    SocialMediaLinks:String[];
    MobileNumbers:String[];
    WorkStarted: String;
    Interests: String[];
    Intro: Intro;
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