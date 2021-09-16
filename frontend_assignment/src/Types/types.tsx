export enum ButtonTypes {
    Left,
    Right
}

export enum ParagraphTypes {
    FooterNote,
    FooterTitle,
    FooterLogo,
    FooterAbout,
    RectangleRight,
    RectangleLeft,
    LabelLeft,
    LabelRight,
    LabelMain,
    LabelForm,
    LabelData,
    CheckBox
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