export enum ButtonTypes {
    LEFT,
    RIGHT
}

export enum ParagraphTypes {
    FOOTERNOTE,
    FOOTERTITLE,
    FOOTERLOGO,
    FOOTERABOUT,
    RECTANGLERIGHT,
    RECTANGLELEFT,
    LABELRIGHT,
    LABELLEFT,
    LABELMAIN,
    LABELFORM,
    LABELDATA,
    CHECKBOX
}

export enum Data {
    NAME,
    SURNAME,
    EMAIL,
    PHONENUMBER,
    UTULOK,
    SUM
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

export interface PickedData {
    utulokOption : UtulokOption,
    inputOption : InputOption,
    personalInformationData  : PersonalInformationData,
}