export enum ButtonTypes {
    LEFT,
    RIGHTINACTIVE,
    RIGHTACTIVE
}

export enum ParagraphTypes {
    FOOTERNOTE,
    FOOTERTITLE,
    FOOTERABOUT,
    RECTANGLERIGHTACTIVE,
    RECTANGLERIGHTINACTIVE,
    RECTANGLELEFTACTIVE,
    RECTANGLELEFTINACTIVE,
    LABELRIGHT,
    LABELLEFT,
    LABELMAIN,
    LABELFORM,
    LABELDATA,
    LINKS
}

export enum Data {
    NAME,
    SURNAME,
    EMAIL,
    PHONENUMBER,
    SHELTER,
    SUM,
    RECTANGLE,
    CHECKBOX
}

export enum RectangleType {
    CONRETE,
    GENERAL,
    NONE
}

export interface ShelterOption {
    id: number,
    name : string
}
export interface SumOption {
    id : number,
    value : number
}

export interface PersonalInformationData {
    name : string,
    surName : string,
    email : string,
    phoneNumber : string
}
export interface ViewParagraph {
    divClass : string, 
    firstText: string, 
    firstParagraphType: ParagraphTypes,
    secondText: string, 
    secondParagraphType: ParagraphTypes
}
export interface PostData {
    firstName : string,
    lastName : string,
    email : string,
    value : string,
    phone? : string,
    shelterId? : number
}