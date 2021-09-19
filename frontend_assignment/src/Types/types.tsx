export enum ButtonTypes {
    LEFT,
    RIGHTINACTIVE,
    RIGHTACTIVE
}

export enum ParagraphTypes {
    FOOTERNOTE,
    FOOTERTITLE,
    FOOTERLOGO,
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
    UTULOK,
    SUM,
    RECTANGLE,
    CHECKBOX
}

export enum RectangleType {
    CONRETE,
    GENERAL,
    NONE
}

export interface UtulokOption {
    id: number,
    name : string
}
export interface InputOption {
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
export interface PickedData {
    utulokOption : UtulokOption,
    inputOption : InputOption,
    personalInformationData  : PersonalInformationData,
}